import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import NativeSelect from "../components/ui/NativeSelect";

const meta: Meta = {
  title: "Catalog/Forms/NativeSelect",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const COUNTRIES = ["France", "Germany", "Italy", "Japan", "Spain", "United Kingdom", "United States"];

const PROPS = [
  { name: "label",                        type: "string",                       defaultVal: "undefined", desc: "Label shown above the select." },
  { name: "value",       required: true,  type: "string",                       defaultVal: "—",         desc: "Controlled select value." },
  { name: "onChange",    required: true,  type: "(e) => void",                  defaultVal: "—",         desc: "Change event handler." },
  { name: "options",                      type: "string[] | {value, label}[]",  defaultVal: "[]",        desc: "Options array — plain strings or value/label objects." },
  { name: "placeholder",                  type: "string",                       defaultVal: "undefined", desc: "Placeholder option (disabled, first item)." },
  { name: "error",                        type: "boolean",                      defaultVal: "false",     desc: "Error state." },
  { name: "disabled",                     type: "boolean",                      defaultVal: "false",     desc: "Disables the select." },
];

function NativeSelectDisplay() {
  const [value, setValue] = useState("");
  const [errorValue, setErrorValue] = useState("");

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        NativeSelect
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Dropdown select with support for placeholder, error state, and disabled state.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "264px 264px", gap: "12px 16px" }}>
          <NativeSelect label="Default" value={value} onChange={(v) => setValue(v)} placeholder="Choose a country…" options={COUNTRIES} />
          <NativeSelect label="With value" value="France" onChange={() => {}} options={COUNTRIES} />
          <NativeSelect label="Error state" value={errorValue} onChange={(v) => setErrorValue(v)} placeholder="Required field" options={COUNTRIES} error={errorValue === ""} />
          <NativeSelect label="Disabled" value="Germany" onChange={() => {}} options={COUNTRIES} disabled />
        </div>
      </div>

      <div style={{ borderBottom: "1px solid var(--neutral-50)", margin: "24px 0" }} />

      {/* Props table */}
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 0 }}>
        <thead>
          <tr>
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
  render: () => <NativeSelectDisplay />,
};
