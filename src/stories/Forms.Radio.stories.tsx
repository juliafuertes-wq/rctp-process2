import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Radio from "../components/ui/Radio";

const meta: Meta = {
  title: "Catalog/Forms/Radio",
  parameters: { layout: "fullscreen" },
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the interactive radio",
    },
    buttonColor: {
      control: "color",
      description: "Color of the interactive radio button border and dot",
    },
    size: {
      control: { type: "range", min: 12, max: 40, step: 1 },
      description: "Size of the interactive radio button in px",
    },
  },
  args: {
    label: "Option A",
    buttonColor: "#028FBB",
    size: 20,
  },
};
export default meta;

type Story = StoryObj<{ label: string; buttonColor: string; size: number }>;

const PROPS = [
  { name: "checked",  required: true,  type: "boolean",     defaultVal: "—",     desc: "Selected state." },
  { name: "disabled",                  type: "boolean",     defaultVal: "false",  desc: "Makes the control non-interactive." },
  { name: "onChange",                  type: "(e) => void", defaultVal: "—",     desc: "Change event handler." },
];

const DEMOS = [
  { label: "Unchecked",        checked: false, disabled: false },
  { label: "Checked",          checked: true,  disabled: false },
  { label: "Disabled empty",   checked: false, disabled: true  },
  { label: "Disabled checked", checked: true,  disabled: true  },
];

function RadioDisplay({ label, buttonColor, size }: { label: string; buttonColor: string; size: number }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Radio
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Custom styled radio button with support for checked, disabled, and group selection.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px" }}>
          {DEMOS.map((d) => (
            <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Radio checked={d.checked} disabled={d.disabled} onChange={() => {}} />
              <span style={{ fontSize: 13, color: d.disabled ? "var(--text-light)" : "var(--text-normal)" }}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive */}
      <div style={{ marginTop: 24, marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Interactive
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, ["--primary-500" as any]: buttonColor, ["--primary-600" as any]: buttonColor }}>
            <div style={{ transform: `scale(${size / 20})`, transformOrigin: "center", flexShrink: 0 }}>
              <Radio checked={selected === label} onChange={() => setSelected(label)} onClick={() => setSelected(selected === label ? null : label)} />
            </div>
            <span style={{ fontSize: 13, color: "var(--text-normal)" }}>{selected === label ? "Checked" : "Unchecked"} — {label}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Radio checked={false} disabled onChange={() => {}} />
            <span style={{ fontSize: 13, color: "var(--text-light)" }}>Disabled</span>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid var(--neutral-50)", marginBottom: 24 }} />

      {/* Props table */}
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 0 }}>
        <thead>
          <tr style={{ background: "var(--neutral-00)" }}>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th key={h} style={{
                textAlign: "left",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-light)",
                padding: "8px 16px",
                borderBottom: "1px solid var(--neutral-50)",
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PROPS.map((p, i) => (
            <tr key={p.name} style={{ background: i % 2 === 0 ? "var(--primary-08)" : "var(--neutral-00)" }}>
              <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--neutral-50)" }}>
                <span style={{
                  fontSize: 12,
                  fontFamily: "var(--rctp-font-mono, monospace)",
                  color: "var(--primary-600)",
                  background: "var(--primary-08)",
                  padding: "2px 6px",
                  borderRadius: 3,
                }}>
                  {p.name}{p.required && <span style={{ color: "var(--alert-500)" }}> *</span>}
                </span>
              </td>
              <td style={{ padding: "10px 16px", fontSize: 13, fontFamily: "var(--rctp-font-mono, monospace)", color: "var(--text-light)", borderBottom: "1px solid var(--neutral-50)" }}>
                {p.type}
              </td>
              <td style={{ padding: "10px 16px", fontSize: 13, fontFamily: "var(--rctp-font-mono, monospace)", color: "var(--text-light)", borderBottom: "1px solid var(--neutral-50)" }}>
                {p.defaultVal}
              </td>
              <td style={{ padding: "10px 16px", fontSize: 13, color: "var(--text-normal)", borderBottom: "1px solid var(--neutral-50)" }}>
                {p.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const AllStates: Story = {
  name: "All States",
  render: (args) => <RadioDisplay label={args.label} buttonColor={args.buttonColor} size={args.size} />,
};
