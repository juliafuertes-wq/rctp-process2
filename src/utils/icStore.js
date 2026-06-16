// In-memory store for Integrity Check report rows (keyed by profileId)
const rows = {};

export function getICRows(profileId) {
  return rows[profileId] || [];
}

export function addICRow(profileId, row) {
  if (!rows[profileId]) rows[profileId] = [];
  rows[profileId] = [...rows[profileId], row];
}

export function deleteICRow(profileId, index) {
  if (!rows[profileId]) return;
  rows[profileId] = rows[profileId].filter((_, i) => i !== index);
}
