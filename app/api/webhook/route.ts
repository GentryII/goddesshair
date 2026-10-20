// app/api/webhook/route.ts
import crypto from "crypto";

export const runtime = "nodejs"; // needed for the crypto module

export async function POST(req: Request) {
  const raw = await req.text(); // raw body, needed for the signature
  const received = req.headers.get("signature") ?? "";

  const expected = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET!)
    .update(raw)
    .digest("hex");

  const a = Buffer.from(received);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    console.log("Invalid signature");
    return new Response("Invalid signature", { status: 401 });
  }

  const evt = JSON.parse(raw);
  console.log(
    "Webhook received:",
    evt.event_type,
    evt.charge_id,
    evt.status,
    evt.mode
  );

  // Only act on successful collections (the push payment). Ack everything else.
  if (evt.event_type !== "api.charge.payment" || evt.status !== "success") {
    return new Response("ok", { status: 200 });
  }

  // Never trust the webhook alone: re-query PayChangu before giving value.
  const res = await fetch(
    `https://api.paychangu.com/mobile-money/payments/${encodeURIComponent(
      evt.charge_id
    )}/verify`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYCHANGU_SECRET_KEY}`,
        Accept: "application/json",
      },
    }
  );
  const verified = await res.json().catch(() => null);
  const ok =
    res.ok &&
    verified?.data?.status === "success" &&
    Number(verified?.data?.amount) === Number(evt.amount);

  if (!ok) {
    console.log("Verification failed for", evt.charge_id, JSON.stringify(verified));
    // 200 so PayChangu doesn't keep retrying a payment we've decided not to honour.
    return new Response("ok", { status: 200 });
  }

  console.log("PAID:", evt.charge_id, evt.amount, evt.currency, evt.mode);

  // TODO: look up evt.charge_id in your DB; if not already "paid", mark it paid
  // and fulfil the order. Webhooks can be delivered more than once.

  return new Response("ok", { status: 200 });
}
