
/* ===== Modal Scrollbar (Image-accurate) ===== */
.modal-scrollbar {
  scrollbar-width: thin;                 /* Firefox */
  scrollbar-color: #b5b5b5 #1f2933;       /* thumb | track */
}

/* Chrome / Edge / Safari */
.modal-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.modal-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.06);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.modal-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(180, 180, 180, 0.9);
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
}

.modal-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(210, 210, 210, 0.95);
}