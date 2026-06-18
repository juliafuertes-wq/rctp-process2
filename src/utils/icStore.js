const rows = {
  lospollos: [
    { _id: 1001, subject: 'Los Pollos Hermanos LLC', requestor: 'Gustavo Fring', createdDate: '12 Mar 2024', renewalDate: '12 Mar 2025', status: 'completed' },
    { _id: 1002, subject: 'Madrigal Electromotive GmbH', requestor: 'Mike Ehrmantraut', createdDate: '28 Jan 2024', renewalDate: '28 Jan 2025', status: 'completed' },
    { _id: 1003, subject: 'Lavandería Brillante S.A.', requestor: 'Saul Goodman', createdDate: '5 Nov 2023', renewalDate: '5 Nov 2024', status: 'completed' },
  ],
};
let nextId = 2000;

export function getICRows(profileId) { return rows[profileId] || []; }

export function addICRow(profileId, row) {
  if (!rows[profileId]) rows[profileId] = [];
  rows[profileId] = [...rows[profileId], { ...row, _id: nextId++ }];
}

export function deleteICRow(profileId, id) {
  if (!rows[profileId]) return;
  rows[profileId] = rows[profileId].filter(r => r._id !== id);
}

export function updateICRowStatus(profileId, id, status) {
  if (!rows[profileId]) return;
  rows[profileId] = rows[profileId].map(r => r._id === id ? { ...r, status } : r);
}
