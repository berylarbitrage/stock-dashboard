"use client";

export function TestBox({ text }: { text: string }) {
  return (
    <div style={{ padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      TestBox: {text}
    </div>
  );
}
