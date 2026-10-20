"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "pending" | "success" | "failed" | "timeout";

export default function PayTestPage() {
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("100");
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function pay(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const res = await fetch("/api/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile, amount: Number(amount), key }),
    });
    const data = await res.json();

    if (!res.ok) {
      setStatus("failed");
      setMessage(data.error ?? "Something went wrong");
      return;
    }

    setStatus("pending");
    setMessage("Check your phone and enter your Airtel Money PIN.");

    // Poll every 3s for up to ~2 minutes.
    for (let i = 0; i < 40; i++) {
      await new Promise((r) => setTimeout(r, 3000));
      const s = await fetch(`/api/charge?id=${data.charge_id}`).then((r) => r.json());
      if (s.status === "success") {
        setStatus("success");
        setMessage(`Paid. Reference: ${data.charge_id}`);
        return;
      }
      if (s.status === "failed") {
        setStatus("failed");
        setMessage(s.message ?? "Payment failed or was cancelled.");
        return;
      }
    }
    setStatus("timeout");
    setMessage("Still pending. Check the PayChangu dashboard and webhook logs.");
  }

  const busy = status === "sending" || status === "pending";

  return (
    <main className="mx-auto max-w-sm p-6">
      <h1 className="mb-4 text-xl font-semibold">Airtel Money test payment</h1>
      <form onSubmit={pay} className="flex flex-col gap-3">
        <input
          className="rounded border p-2 text-black"
          placeholder="Airtel number e.g. 0999123456"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          inputMode="tel"
          required
        />
        <input
          className="rounded border p-2 text-black"
          placeholder="Amount (MWK)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          inputMode="numeric"
          required
        />
        <input
          className="rounded border p-2 text-black"
          placeholder="Test key (only if TEST_KEY is set)"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          type="password"
        />
        <button
          disabled={busy}
          className="rounded bg-black p-2 text-white disabled:opacity-50"
        >
          {busy ? "Waiting…" : "Send payment prompt"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm ${
            status === "success"
              ? "text-green-600"
              : status === "failed"
              ? "text-red-600"
              : ""
          }`}
        >
          {message}
        </p>
      )}
    </main>
  );
}
