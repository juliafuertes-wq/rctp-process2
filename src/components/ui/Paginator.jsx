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
    <div className="d-flex align-items-center justify-content-end flex-wrap" style={{ gap: 12, paddingTop: 12 }}>
      <div className="d-flex align-items-center" style={{ gap: 8 }}>
        <select
          className="form-control form-control-sm"
          style={{ width: 'auto' }}
          value={pageSize}
          onChange={e => onPageSizeChange?.(Number(e.target.value))}
        >
          {pageSizeOptions.map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <span className="text-muted small">
          {totalItems === 0 ? 'No results' : `Showing results ${start} – ${end} of ${totalItems}`}
        </span>
      </div>
      <ul className="pagination pagination-sm mb-0">
        <li className={`page-item${page <= 1 ? ' disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange?.(1)} disabled={page <= 1} aria-label="First page">
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>first_page</span>
          </button>
        </li>
        <li className={`page-item${page <= 1 ? ' disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange?.(page - 1)} disabled={page <= 1} aria-label="Previous page">
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>chevron_left</span>
          </button>
        </li>
        <li className="page-item">
          <input
            className="page-link form-control form-control-sm"
            type="number"
            min={1}
            max={totalPages}
            value={page}
            onChange={e => {
              const v = Math.max(1, Math.min(totalPages, Number(e.target.value)));
              onPageChange?.(v);
            }}
            aria-label="Page number"
            style={{ width: 48, textAlign: 'center' }}
          />
        </li>
        <li className="page-item disabled">
          <span className="page-link">of {totalPages}</span>
        </li>
        <li className={`page-item${page >= totalPages ? ' disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange?.(page + 1)} disabled={page >= totalPages} aria-label="Next page">
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>chevron_right</span>
          </button>
        </li>
        <li className={`page-item${page >= totalPages ? ' disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange?.(totalPages)} disabled={page >= totalPages} aria-label="Last page">
            <span className="material-icons-outlined" style={{ fontSize: 16 }}>last_page</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
