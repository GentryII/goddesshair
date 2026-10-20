// app/api/charge/route.ts
// POST /api/charge  -> sends the Airtel Money push prompt to the customer's phone
// GET  /api/charge?id=PC-...  -> checks the charge status (for the test page to poll)

import crypto from "crypto";

export const runtime = "nodejs";

const API = "https://api.paychangu.com";

// Airtel Money operator ref_id. This value comes from PayChangu's docs example
// response; confirm it in your dashboard / "Get Operators" endpoint.
const AIRTEL_REF_ID =
  process.env.AIRTEL_OPERATOR_REF_ID ?? "20be6c20-adeb-4b5b-a7ba-0769820df4fb";

// Safety cap while testing with real money (MWK). Raise via env when ready.
const MAX_AMOUNT = Number(process.env.MAX_CHARGE_AMOUNT ?? 1000);

function authHeaders() {
  return {
    Authorization: `Bearer ${process.env.PAYCHANGU_SECRET_KEY}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

// "+265 99 912 3456" / "999123456" / "0999123456" -> "0999123456"
// If PayChangu rejects the leading 0, change this to return `0${digits}` -> `digits`.
function normalizeMobile(input: string): string | null {
  let d = input.replace(/\D/g, "");
  if (d.startsWith("265")) d = d.slice(3);
  if (d.startsWith("0")) d = d.slice(1);
  if (!/^\d{9}$/.test(d)) return null;
  return `0${d}`;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  // Optional gate so strangers can't trigger charges on your public URL.
  if (process.env.TEST_KEY && body.key !== process.env.TEST_KEY) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const mobile = normalizeMobile(String(body.mobile ?? ""));
  if (!mobile) {
    return Response.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const amount = Number(body.amount);
  if (!Number.isInteger(amount) || amount <= 0 || amount > MAX_AMOUNT) {
    return Response.json(
      { error: `Amount must be a whole number between 1 and ${MAX_AMOUNT}` },
      { status: 400 }
    );
  }

  // Must be unique per transaction.
  const charge_id = `PC-${Date.now()}-${crypto.randomBytes(3).toString("hex")}`;

  const res = await fetch(`${API}/mobile-money/payments/initialize`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      mobile,
      mobile_money_operator_ref_id: AIRTEL_REF_ID,
      amount: String(amount),
      charge_id,
    }),
  });

  const data = await res.json().catch(() => null);
  console.log("Charge initialize:", res.status, JSON.stringify(data));

  if (!res.ok) {
    return Response.json(
      { error: data?.message ?? "PayChangu rejected the charge" },
      { status: 502 }
    );
  }

  // TODO: save { charge_id, amount, mobile, status: "pending" } to your DB here.
  return Response.json({ charge_id, status: data?.data?.status ?? "pending" });
}

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id");
  if (!id) return Response.json({ error: "Missing id" }, { status: 400 });

  const res = await fetch(
    `${API}/mobile-money/payments/${encodeURIComponent(id)}/verify`,
    { headers: authHeaders() }
  );
  const data = await res.json().catch(() => null);

  return Response.json({
    status: data?.data?.status ?? "unknown", // "pending" | "success" | "failed"
    message: data?.message ?? null,
  });
}
