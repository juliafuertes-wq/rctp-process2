import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Button from '../components/ui/Button';
import styles from './Employees.module.scss';

const ROWS = [
  { name: 'Antonella Sassu',              tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Barry Marbles',                tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Bianka Grimm',                 tags: '', ref: '', bu: 'Entity Verification', restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Calvin Kang',                  tags: '', ref: '', bu: 'test',                restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Calvin Kang (Test 2)',          tags: '', ref: '', bu: 'test',                restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Calvin Kang NotPartOfApproveGroup', tags: '', ref: '', bu: 'test',           restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Carmela Monllor Llorens',      tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Chris Eadie',                  tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Claudio Merino',               tags: '', ref: '', bu: 'Entity Verification', restricted: 'No', active: 'Yes', status: 'Not Registered' },
  { name: 'Claudio Merino',               tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'DJ Service Desk',              tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'DJ Support',                   tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'David Robayo',                 tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Davide Contini',               tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'E W',                          tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Jorge Sneij',                  tags: '', ref: '', bu: 'test',                restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Maria Joao Cruz',              tags: '', ref: '', bu: 'Entity Verification', restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Min Chung',                    tags: '', ref: '', bu: 'test',                restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Miruna Menzopol',              tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Miruna Menzopol (Admin)',      tags: '', ref: '', bu: 'Entity Verification', restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Nataly Baez',                  tags: '', ref: '', bu: 'test',                restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Oriol Gomez',                  tags: '', ref: '', bu: 'Entity Verification', restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Soni Kumari',                  tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Tayfun Kocak',                 tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Veronica Torres Troconis',     tags: '', ref: '', bu: 'Entity Verification', restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'Yi Zhang',                     tags: '', ref: '', bu: 'test',                restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'alvaro sanchez',               tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'alvaro sanchez',               tags: '', ref: '', bu: 'test',                restricted: 'No', active: 'Yes', status: 'Not Registered' },
  { name: 'karolina kopacz',              tags: '', ref: '', bu: 'Europe',              restricted: 'No', active: 'Yes', status: 'Registered' },
  { name: 'stephen davidson',             tags: '', ref: '', bu: 'Entity Verification', restricted: 'No', active: 'Yes', status: 'Registered' },
];

function StatusBadge({ status }) {
  const isReg = status === 'Registered';
  return (
    <span className={`badge ${isReg ? 'badge-registered' : 'badge-not-registered'}`}>
      {status}
    </span>
  );
}

export default function Employees() {
  const [search, setSearch] = useState('');

  const filtered = search
    ? ROWS.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.bu.toLowerCase().includes(search.toLowerCase())
      )
    : ROWS;

  return (
    <PageLayout>
      <Breadcrumb items={[{ label: 'Employees' }]} />

      <div className={styles.card}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Employees</h1>
          <div className={styles.titleActions}>
            <Button variant="outline" icon="arrow_drop_down">Standard</Button>
            <Button variant="outline" icon="filter_list" />
            <Button variant="filled">Add Employee</Button>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <div className={styles.searchWrap}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Quick Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <span className="material-icons-outlined" className="text-muted" style={{ position: 'absolute', right: 8, fontSize: 18, pointerEvents: 'none' }}>search</span>
            </div>
            <span className="text-muted" style={{ fontSize: 13, whiteSpace: 'nowrap' }}>
              Showing results 1 – {filtered.length} of {filtered.length}
            </span>
          </div>
          <div className={styles.toolbarRight}>
            <Button variant="outline" icon="file_download">Export</Button>
            <Button variant="soft">Save</Button>
            <Button variant="soft">Save As</Button>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                <th>Tags <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                <th>Ref <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                <th>Business Unit <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                <th>Third Party Restricted <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                <th>Active <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
                <th>Status <span className="material-icons-outlined" style={{ fontSize: 12 }}>arrow_drop_down</span></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="text-muted" style={{ textAlign: 'center', padding: '32px 0' }}>No employees found.</td></tr>
              ) : filtered.map((row, i) => (
                <tr key={i}>
                  <td><span className={styles.cellLink}>{row.name}</span></td>
                  <td>{row.tags}</td>
                  <td>{row.ref}</td>
                  <td>{row.bu}</td>
                  <td>{row.restricted}</td>
                  <td>{row.active}</td>
                  <td><StatusBadge status={row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.divider} />
        <div className="d-flex align-items-center justify-content-end flex-wrap" style={{ gap: 12, paddingTop: 12 }}>
          <div className="d-flex align-items-center" style={{ gap: 8 }}>
            <select className="form-control form-control-sm" style={{ width: 'auto' }}>
              <option>20</option><option>50</option><option>100</option>
            </select>
            <span className="text-muted small">Showing results 1 – {filtered.length} of {filtered.length}</span>
          </div>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled"><button className="page-link" disabled><span className="material-icons-outlined">first_page</span></button></li>
            <li className="page-item disabled"><button className="page-link" disabled><span className="material-icons-outlined">chevron_left</span></button></li>
            <li className="page-item disabled"><span className="page-link">Page</span></li>
            <li className="page-item"><input className="page-link form-control form-control-sm" type="number" defaultValue={1} min={1} max={1} style={{ width: 48, textAlign: 'center' }} /></li>
            <li className="page-item disabled"><span className="page-link">of 1</span></li>
            <li className="page-item disabled"><button className="page-link" disabled><span className="material-icons-outlined">chevron_right</span></button></li>
            <li className="page-item disabled"><button className="page-link" disabled><span className="material-icons-outlined">last_page</span></button></li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
