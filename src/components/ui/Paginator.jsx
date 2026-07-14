export default function Paginator({
  page = 1,
  totalPages = 1,
  pageSize = 20,
  totalItems = 0,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [20, 50, 100],
}) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div className="pag-wrap">
      <div className="pag-left">
        <select
          className="pag-size"
          value={pageSize}
          onChange={e => onPageSizeChange?.(Number(e.target.value))}
        >
          {pageSizeOptions.map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <span className="pag-info">
          {totalItems === 0 ? 'No results' : `Showing results ${start} – ${end} of ${totalItems}`}
        </span>
      </div>
      <div className="pag-right">
        <button className="pag-btn" onClick={() => onPageChange?.(1)} disabled={page <= 1} aria-label="First page">
          <span className="material-icons-outlined" style={{ fontSize: 16 }}>first_page</span>
        </button>
        <button className="pag-btn" onClick={() => onPageChange?.(page - 1)} disabled={page <= 1} aria-label="Previous page">
          <span className="material-icons-outlined" style={{ fontSize: 16 }}>chevron_left</span>
        </button>
        <input
          className="pag-input"
          type="number"
          min={1}
          max={totalPages}
          value={page}
          onChange={e => {
            const v = Math.max(1, Math.min(totalPages, Number(e.target.value)));
            onPageChange?.(v);
          }}
          aria-label="Page number"
        />
        <span className="pag-info">of {totalPages}</span>
        <button className="pag-btn" onClick={() => onPageChange?.(page + 1)} disabled={page >= totalPages} aria-label="Next page">
          <span className="material-icons-outlined" style={{ fontSize: 16 }}>chevron_right</span>
        </button>
        <button className="pag-btn" onClick={() => onPageChange?.(totalPages)} disabled={page >= totalPages} aria-label="Last page">
          <span className="material-icons-outlined" style={{ fontSize: 16 }}>last_page</span>
        </button>
      </div>
    </div>
  );
}
