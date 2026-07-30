export default function Paginator({
  page = 1,
  totalPages = 1,
  pageSize = 20,
  totalItems = 0,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [20, 50, 100],
  hideNav = false,
}) {
  const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1;
  const end   = Math.min(page * pageSize, totalItems);

  function handlePageInput(e) {
    const v = Math.max(1, Math.min(totalPages, Number(e.target.value)));
    if (!isNaN(v)) onPageChange?.(v);
  }

  const atFirst = page <= 1;
  const atLast  = page >= totalPages;

  return (
    <div className="paginator">
      <div className="paginator-left">
        <select
          className="paginator-size-select"
          value={pageSize}
          onChange={e => onPageSizeChange?.(Number(e.target.value))}
        >
          {pageSizeOptions.map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <span className="paginator-count">
          {totalItems === 0
            ? 'No results'
            : `Showing results ${start} - ${end} of ${totalItems}`}
        </span>
      </div>

      {!hideNav && (
        <div className="paginator-nav">
          <button
            className={`paginator-nav-btn${atFirst ? '' : ' active'}`}
            disabled={atFirst}
            onClick={() => onPageChange?.(1)}
            aria-label="First page"
          >
            |&lt;
          </button>
          <button
            className={`paginator-nav-btn${atFirst ? '' : ' active'}`}
            disabled={atFirst}
            onClick={() => onPageChange?.(page - 1)}
            aria-label="Previous page"
          >
            &lt;
          </button>
          <span className="paginator-label">Page</span>
          <input
            className="paginator-input"
            type="number"
            min={1}
            max={totalPages}
            value={page}
            onChange={handlePageInput}
            aria-label="Page number"
          />
          <span className="paginator-label">of {totalPages}</span>
          <button
            className={`paginator-nav-btn${atLast ? '' : ' active'}`}
            disabled={atLast}
            onClick={() => onPageChange?.(page + 1)}
            aria-label="Next page"
          >
            &gt;
          </button>
          <button
            className={`paginator-nav-btn${atLast ? '' : ' active'}`}
            disabled={atLast}
            onClick={() => onPageChange?.(totalPages)}
            aria-label="Last page"
          >
            &gt;|
          </button>
        </div>
      )}
    </div>
  );
}
