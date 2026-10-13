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
  console.log("Webhook received:", evt.event_type, evt.charge_id, evt.status);

  // TODO: update your DB by evt.charge_id (skip if already processed)

  return new Response("ok", { status: 200 });
}
