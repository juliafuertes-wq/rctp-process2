import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";

const meta: Meta = {
  title: "Catalog/UI Components/Modal",
  parameters: { layout: "fullscreen" },
  argTypes: {
    title: {
      control: "text",
      description: "Modal header title",
    },
    confirmLabel: {
      control: "text",
      description: "Confirm button label",
    },
    cancelLabel: {
      control: "text",
      description: "Cancel button label",
    },
  },
  args: {
    title: "Confirm Action",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
  },
};
export default meta;

type Story = StoryObj<{ title: string; confirmLabel: string; cancelLabel: string }>;

const PROPS = [
  { name: "open",            required: true, type: "boolean",      defaultVal: "—",          desc: "Controls modal visibility." },
  { name: "title",           required: true, type: "string",       defaultVal: "—",          desc: "Modal header title text." },
  { name: "onClose",                         type: "() => void",   defaultVal: "—",          desc: "Callback fired on close button, Escape key, or backdrop click." },
  { name: "onConfirm",                        type: "() => void",  defaultVal: "—",          desc: "Callback fired on the confirm button." },
  { name: "confirmLabel",                     type: "string",      defaultVal: "'Confirm'",  desc: "Label for the confirm button." },
  { name: "cancelLabel",                      type: "string",      defaultVal: "'Cancel'",   desc: "Label for the cancel button." },
  { name: "confirmDisabled",                  type: "boolean",     defaultVal: "false",      desc: "Disables the confirm button." },
  { name: "children",                         type: "ReactNode",   defaultVal: "—",          desc: "Modal body content." },
];

function ModalDisplay({ title, confirmLabel, cancelLabel }: { title: string; confirmLabel: string; cancelLabel: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Modal
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Centered dialog with a dimmed overlay. Used for destructive confirmations (delete, cancel creation, decline) and renewal prompts. Closes on Escape, backdrop click, or the cancel button.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <Button variant="filled" onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          title={title}
          onClose={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
        >
          <p style={{ margin: 0, fontSize: 14, color: "var(--text-light)", lineHeight: 1.6 }}>
            This is the modal body content. You can place any content here — forms, descriptions, warnings, etc.
          </p>
        </Modal>
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
  render: (args) => <ModalDisplay title={args.title} confirmLabel={args.confirmLabel} cancelLabel={args.cancelLabel} />,
};
