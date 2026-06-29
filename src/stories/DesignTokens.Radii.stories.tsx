import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";

const RADII_TOKENS = [
  { name: "--rctp-radius-xs",   value: "2px" },
  { name: "--rctp-radius-sm",   value: "4px" },
  { name: "--rctp-radius-md",   value: "8px" },
  { name: "--rctp-radius-pill", value: "1000px" },
];

const Z_INDEX_TOKENS = [
  { name: "--z-tooltip",  value: "10" },
  { name: "--z-dropdown", value: "200" },
  { name: "--z-alert",    value: "500" },
  { name: "--z-modal",    value: "1000" },
  { name: "--z-overlay",  value: "1100" },
  { name: "--z-panel",    value: "1101" },
  { name: "--z-cancel",   value: "2000" },
  { name: "--z-creating", value: "3000" },
];

function RadiiDisplay() {
  const [radiiValues, setRadiiValues] = useState<Record<string, string>>({});
  const [zValues, setZValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = document.documentElement;
    const resolved: Record<string, string> = {};
    RADII_TOKENS.forEach((t) => {
      resolved[t.name] = getComputedStyle(root).getPropertyValue(t.name).trim();
    });
    setRadiiValues(resolved);

    const zResolved: Record<string, string> = {};
    Z_INDEX_TOKENS.forEach((t) => {
      zResolved[t.name] = getComputedStyle(root).getPropertyValue(t.name).trim();
    });
    setZValues(zResolved);
  }, []);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Radii
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Border radius tokens from sharp (2px) to full pill (1000px).
      </p>
      <div style={{ borderBottom: "1px solid var(--neutral-50)", margin: "16px 0 24px" }} />

      {/* Radii row */}
      <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
        {RADII_TOKENS.map((token) => {
          const resolved = radiiValues[token.name] || token.value;
          return (
            <div key={token.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 64,
                  height: 40,
                  background: "var(--primary-100)",
                  border: "1px solid var(--primary-300)",
                  borderRadius: `var(${token.name})`,
                }}
              />
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 12,
                  color: "var(--text-light)",
                  fontFamily: "var(--rctp-font-mono, monospace)",
                  marginBottom: 2,
                }}>
                  {token.name}
                </div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text-light)",
                  fontFamily: "var(--rctp-font-mono, monospace)",
                }}>
                  {resolved || token.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Z-Index section */}
      <div style={{ marginTop: 40 }}>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "var(--text-normal)",
          marginBottom: 16,
        }}>
          Z-Index Scale
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Z_INDEX_TOKENS.map((token) => {
            const resolved = zValues[token.name] || token.value;
            return (
              <div key={token.name} style={{
                display: "flex",
                alignItems: "center",
                gap: 48,
                padding: "12px 0",
                borderBottom: "1px solid var(--neutral-50)",
              }}>
                <span style={{
                  minWidth: 160,
                  fontSize: 13,
                  color: "var(--primary-500)",
                  fontFamily: "var(--rctp-font-mono, monospace)",
                }}>
                  {token.name}
                </span>
                <span style={{
                  fontSize: 13,
                  color: "var(--text-normal)",
                }}>
                  {resolved || token.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Catalog/Design Tokens/Radii",
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj;

export const AllRadii: Story = {
  name: "All Radii",
  render: () => <RadiiDisplay />,
};
