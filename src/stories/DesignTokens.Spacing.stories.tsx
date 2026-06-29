import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

const SPACING_TOKEN_NAMES = [
  "--rctp-space-1",
  "--rctp-space-2",
  "--rctp-space-3",
  "--rctp-space-4",
  "--rctp-space-5",
  "--rctp-space-6",
  "--rctp-space-8",
  "--rctp-space-10",
  "--rctp-space-12",
  "--rctp-space-14",
];

function SpacingDisplay() {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = document.documentElement;
    const resolved: Record<string, string> = {};
    SPACING_TOKEN_NAMES.forEach((t) => {
      resolved[t] = getComputedStyle(root).getPropertyValue(t).trim();
    });
    setValues(resolved);
  }, []);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-25)", minHeight: "100vh" }}>
      <h2 style={{ fontSize: 22, fontWeight: 500, color: "var(--text-normal)", marginBottom: 4, fontFamily: "var(--font-heading)" }}>
        Spacing
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 20 }}>
        4px-base spacing scale. Values resolved at runtime via <code>getComputedStyle</code>.
      </p>

      <div style={{ padding: "8px 0" }}>
        {SPACING_TOKEN_NAMES.map((name) => {
          const resolved = values[name] || "";
          const px = parseInt(resolved) || 0;
          const barWidth = px * 2;
          const barHeight = 16;
          return (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 0",
              }}
            >
              <span style={{
                minWidth: 200,
                fontSize: 13,
                color: "var(--text-light)",
                fontFamily: "var(--rctp-font-mono, monospace)",
              }}>
                {name}
              </span>
              <div
                style={{
                  width: barWidth,
                  height: barHeight,
                  background: "var(--primary-100)",
                  border: "1px solid var(--primary-300)",
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />
              <span style={{
                marginLeft: 12,
                fontSize: 13,
                color: "var(--text-light)",
                fontFamily: "var(--rctp-font-mono, monospace)",
              }}>
                {resolved || "…"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Catalog/Design Tokens/Spacing",
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj;

export const AllSpacing: Story = {
  name: "All Spacing",
  render: () => <SpacingDisplay />,
};
