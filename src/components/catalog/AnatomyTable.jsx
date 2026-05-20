import styles from './PropsTable.module.css';

export default function AnatomyTable({ rows }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table} style={{ minWidth: 0 }}>
        <thead>
          <tr>
            <th style={{ width: '22%' }}>Part</th>
            <th style={{ width: '38%' }}>Purpose</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td><code className={styles.code}>{r.part}</code></td>
              <td className={styles.desc}>{r.purpose}</td>
              <td className={styles.desc}>{r.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
