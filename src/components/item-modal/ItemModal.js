import React from "react";
import Modal from "@mui/material/Modal";

const ItemModal = ({ showItemModal, setShowItemModal }) => {
  return (
    <Modal open={showItemModal} onClose={() => setShowItemModal(false)}>
      ItemModal
    </Modal>
  );
};

export default ItemModal;
