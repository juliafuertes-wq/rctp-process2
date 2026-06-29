import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import TextField from "../components/ui/TextField";

const meta: Meta = {
  title: "Catalog/Forms/TextField",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "label",                        type: "string",        defaultVal: "undefined",   desc: "Label shown above the input." },
  { name: "value",       required: true,  type: "string",        defaultVal: "—",           desc: "Controlled input value." },
  { name: "onChange",    required: true,  type: "(e) => void",   defaultVal: "—",           desc: "Change event handler." },
  { name: "placeholder",                  type: "string",        defaultVal: "undefined",   desc: "Placeholder text." },
  { name: "type",                         type: "string",        defaultVal: "'text'",      desc: "HTML input type (text, email, password, number, etc.)." },
  { name: "error",                        type: "boolean",       defaultVal: "false",       desc: "Error state — applies red border." },
  { name: "errorText",                    type: "string",        defaultVal: "undefined",   desc: "Error message shown below the field." },
  { name: "helperText",                   type: "string",        defaultVal: "undefined",   desc: "Helper text shown below the field (only when no error)." },
  { name: "icon",                         type: "string",        defaultVal: "undefined",   desc: "Material Icons Outlined icon name shown as a leading icon." },
  { name: "disabled",                     type: "boolean",       defaultVal: "false",       desc: "Disables the input." },
];

function TextFieldDisplay() {
  const [defaultVal, setDefaultVal] = useState("");
  const [defaultTouched, setDefaultTouched] = useState(false);
  const [iconVal, setIconVal] = useState("");
  const [helperVal, setHelperVal] = useState("");

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        TextField
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Single-line text input with support for label, icon, helper text, error state, and disabled state.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "264px 264px", gap: "12px 16px", padding: "0 0 4px" }}>
          <TextField
            label="Default"
            value={defaultVal}
            onChange={(e) => setDefaultVal(e.target.value)}
            onBlur={() => setDefaultTouched(true)}
            onFocus={() => setDefaultTouched(false)}
            placeholder="Enter value…"
            error={defaultTouched && defaultVal.length === 0}
            errorText="This field is required"
          />
          <TextField
            label="With icon"
            value={iconVal}
            onChange={(e) => setIconVal(e.target.value)}
            placeholder="Search…"
            icon="search"
          />
          <TextField
            label="With helper"
            value={helperVal}
            onChange={(e) => setHelperVal(e.target.value)}
            placeholder="Legal name"
            helperText="Enter the full registered legal name"
          />
          <TextField
            label="Error state"
            value=""
            onChange={() => {}}
            placeholder="Required field"
            error
            errorText="This field is required"
          />
          <TextField
            label="Disabled"
            value="Locked value"
            onChange={() => {}}
            disabled
          />
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
  render: () => <TextFieldDisplay />,
};
