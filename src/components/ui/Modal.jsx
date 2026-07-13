import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Button from './Button';

export default function Modal({
  open,
  title,
  onClose,
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmDisabled = false,
  children,
}) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === 'Escape') onClose?.(); }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={e => { if (e.target === e.currentTarget) onClose?.(); }}
        >
          <motion.div
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="modal-header">
              <h2 id="modal-title" className="modal-title">{title}</h2>
              <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                <span className="material-icons-outlined" style={{ fontSize: 18 }}>close</span>
              </button>
            </div>

            <div className="modal-content">
              {children}
            </div>

            <div className="modal-footer">
              <div className="modal-footer-divider" />
              <div className="modal-footer-buttons">
                <Button variant="outline" onClick={onClose}>{cancelLabel}</Button>
                <Button variant="filled" onClick={onConfirm} disabled={confirmDisabled}>{confirmLabel}</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
