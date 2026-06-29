import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

const SHADOW_TOKEN_NAMES = [
  "--rctp-shadow-xs",
  "--rctp-shadow-sm",
  "--rctp-shadow-md",
  "--rctp-shadow-lg",
  "--rctp-shadow-xl",
];

function ShadowsDisplay() {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = document.documentElement;
    const resolved: Record<string, string> = {};
    SHADOW_TOKEN_NAMES.forEach((t) => {
      resolved[t] = getComputedStyle(root).getPropertyValue(t).trim();
    });
    setValues(resolved);
  }, []);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Shadows
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Box shadow tokens used across cards, dropdowns, and overlays.
      </p>
      <div style={{ borderBottom: "1px solid var(--neutral-50)", margin: "16px 0 0" }} />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {SHADOW_TOKEN_NAMES.map((name) => {
          const resolved = values[name] || "";
          return (
            <div key={name} style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "8px 0",
              borderBottom: "1px solid var(--neutral-50)",
            }}>
              <div
                style={{
                  width: 80,
                  height: 40,
                  background: "var(--neutral-00)",
                  borderRadius: 8,
                  boxShadow: `var(${name})`,
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-normal)",
                  fontFamily: "var(--rctp-font-mono, monospace)",
                  marginBottom: 4,
                }}>
                  {name}
                </div>
                <div style={{
                  fontSize: 12,
                  color: "var(--neutral-400)",
                  fontFamily: "var(--rctp-font-mono, monospace)",
                }}>
                  {resolved || "…"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Catalog/Design Tokens/Shadows",
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj;

export const AllShadows: Story = {
  name: "All Shadows",
  render: () => <ShadowsDisplay />,
};
