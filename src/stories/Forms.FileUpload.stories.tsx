import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";

const meta: Meta = {
  title: "Catalog/Forms/File Upload Row",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "fileName",  type: "string",          defaultVal: "''",        desc: "Currently selected file name; shows \"Choose Files\" placeholder when empty." },
  { name: "onSelect",  type: "(file) => void",   defaultVal: "—",         desc: "Called when the user picks a file from the system dialog." },
  { name: "onUpload",  type: "() => void",       defaultVal: "—",         desc: "Called when the user clicks the Upload button." },
  { name: "accept",    type: "string",           defaultVal: "undefined", desc: "Comma-separated list of allowed extensions (e.g. '.pdf,.docx,.png')." },
  { name: "multiple",  type: "boolean",          defaultVal: "false",     desc: "Whether to allow multiple file selection." },
  { name: "hint",      type: "ReactNode",        defaultVal: "undefined", desc: "Helper text shown below the row (typically lists allowed file types)." },
  { name: "disabled",  type: "boolean",          defaultVal: "false",     desc: "Disables Browse and Upload buttons." },
];

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  border: "1px solid var(--neutral-100)",
  borderRadius: 4,
  overflow: "hidden",
};

const labelStyle: React.CSSProperties = {
  flex: 1,
  padding: "8px 12px",
  fontSize: 13,
  color: "var(--text-light)",
  background: "var(--neutral-00)",
};

const browseStyle: React.CSSProperties = {
  padding: "8px 14px",
  background: "var(--neutral-50)",
  border: "none",
  borderLeft: "1px solid var(--neutral-100)",
  fontSize: 12,
  fontWeight: 600,
  color: "var(--text-normal)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  cursor: "pointer",
  whiteSpace: "nowrap" as const,
};

const hintStyle: React.CSSProperties = {
  fontSize: 12,
  color: "var(--text-light)",
  lineHeight: 1.5,
  margin: "6px 0 12px",
};

const uploadBtnStyle = (disabled: boolean): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "7px 18px",
  border: "1px solid var(--primary-500)",
  borderRadius: 4,
  background: "none",
  fontSize: 12,
  fontWeight: 600,
  fontFamily: "inherit",
  color: "var(--primary-500)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.5 : 1,
});

function FileUploadDisplay() {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        File Upload Row
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        File picker pattern used by Internal Due Diligence, Approval Stage, and the Decline Panel. Three parts joined into one row: a label that shows either 'Choose Files' or the current filename, a Browse button that opens the native file dialog, and a separate Upload button beneath. Hint text under the row lists allowed file types.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ width: 520 }}>
          <input
            ref={(el) => { (fileInputRef as any)[1] = el; }}
            type="file"
            accept=".docx,.pdf,.jpeg,.jpg,.png"
            style={{ display: "none" }}
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
          <div style={rowStyle}>
            <span style={labelStyle}>{fileName || "Choose Files"}</span>
            <button
              style={browseStyle}
              onClick={() => {
                if (fileName) {
                  setFileName("");
                } else {
                  document.querySelector<HTMLInputElement>("input[type=file]")?.click();
                }
              }}
            >
              {fileName ? "Clear" : "Browse"}
            </button>
          </div>
          <p style={hintStyle}>
            Click the 'Choose Files' button to browse for a file and then click the 'Upload'. Uploaded files will appear below.{" "}
            Allowed file types include: <strong>.docx,.pdf,.jpeg,.jpg,.png</strong><br />
            Multiple uploads are permitted
          </p>
          <button style={uploadBtnStyle(!fileName)} disabled={!fileName}>Upload</button>
        </div>
        <p style={{ fontSize: 11, color: "var(--neutral-400)", marginTop: 12 }}>
          Click Browse to select a file. The Upload button is disabled until a file is chosen.
        </p>
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
                  {p.name}
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
  render: () => <FileUploadDisplay />,
};
