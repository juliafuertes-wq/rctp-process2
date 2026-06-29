import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Paginator from "../components/ui/Paginator";

const meta: Meta = {
  title: "Catalog/Data Display/Paginator",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "page",             required: true, type: "number",               defaultVal: "1",          desc: "Current page (1-based)." },
  { name: "totalPages",       required: true, type: "number",               defaultVal: "1",          desc: "Total number of pages." },
  { name: "pageSize",                         type: "number",               defaultVal: "20",         desc: "Current page size (rows per page)." },
  { name: "totalItems",                       type: "number",               defaultVal: "0",          desc: "Total number of items across all pages." },
  { name: "onPageChange",                     type: "(page: number) => void", defaultVal: "—",        desc: "Called when the user navigates to a different page." },
  { name: "onPageSizeChange",                 type: "(size: number) => void", defaultVal: "—",        desc: "Called when the user changes the page size." },
  { name: "pageSizeOptions",                  type: "number[]",             defaultVal: "[20, 50, 100]", desc: "Options available in the page size selector." },
];

function PaginatorDisplay() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const totalItems = 140;
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Paginator
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Full pagination bar with page-size selector, result count, and first/prev/next/last navigation.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Paginator
            page={page}
            totalPages={totalPages}
            pageSize={pageSize}
            totalItems={totalItems}
            onPageChange={setPage}
            onPageSizeChange={(s) => { setPageSize(s); setPage(1); }}
          />
          <div style={{ fontSize: 12, color: "var(--text-light)" }}>
            Page {page} of {totalPages} · {pageSize} per page · {totalItems} total items
          </div>
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
  render: () => <PaginatorDisplay />,
};
