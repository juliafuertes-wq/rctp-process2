import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import TokenSwatch from "../components/catalog/TokenSwatch";

const COLOR_GROUPS = [
  {
    label: "Brand Primary",
    tokens: [
      "--primary-08",
      "--primary-50",
      "--primary-100",
      "--primary-200",
      "--primary-300",
      "--primary-400",
      "--primary-500",
      "--primary-600",
      "--primary-700",
      "--primary-800",
      "--primary-900",
    ],
  },
  {
    label: "Neutral",
    tokens: [
      "--neutral-00",
      "--neutral-25",
      "--neutral-50",
      "--neutral-100",
      "--neutral-200",
      "--neutral-300",
      "--neutral-400",
      "--neutral-500",
      "--neutral-600",
      "--neutral-700",
      "--neutral-800",
      "--neutral-900",
    ],
  },
  {
    label: "Text",
    tokens: [
      "--text-normal",
      "--text-light",
      "--text-light-alt",
      "--text-dark",
    ],
  },
  {
    label: "Alert",
    tokens: [
      "--alert-50",
      "--alert-100",
      "--alert-300",
      "--alert-500",
      "--alert-700",
      "--alert-900",
    ],
  },
  {
    label: "Success",
    tokens: [
      "--success-50",
      "--success-100",
      "--success-300",
      "--success-500",
      "--success-700",
      "--success-900",
    ],
  },
  {
    label: "Warning",
    tokens: [
      "--warning-50",
      "--warning-100",
      "--warning-300",
      "--warning-500",
      "--warning-700",
      "--warning-900",
    ],
  },
];

const groupTitleStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--text-light)",
  marginBottom: 8,
  marginTop: 24,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "2px 24px",
  marginBottom: 4,
};

function ColorsDisplay() {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = document.documentElement;
    const resolved: Record<string, string> = {};
    COLOR_GROUPS.flatMap((g) => g.tokens).forEach((t) => {
      resolved[t] = getComputedStyle(root).getPropertyValue(t).trim();
    });
    setValues(resolved);
  }, []);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-25)", minHeight: "100vh" }}>
      <h2 style={{ fontSize: 22, fontWeight: 500, color: "var(--text-normal)", marginBottom: 4 }}>
        Colors
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 8 }}>
        All CSS custom properties from <code>globals.css</code>. Values are resolved at runtime via{" "}
        <code>getComputedStyle</code>.
      </p>
      {COLOR_GROUPS.map((group) => (
        <div key={group.label}>
          <div style={groupTitleStyle}>{group.label}</div>
          <div style={gridStyle}>
            {group.tokens.map((t) => (
              <TokenSwatch key={t} name={t} value={values[t] || "…"} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Catalog/Design Tokens/Colors",
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj;

export const AllColors: Story = {
  name: "All Colors",
  render: () => <ColorsDisplay />,
};
