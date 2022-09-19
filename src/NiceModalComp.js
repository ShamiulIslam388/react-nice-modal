import { Modal } from "antd";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

export default NiceModal.create(({ name }) => {
  const modal = useModal();
  return (
    <Modal
      width="350px"
      title="Nice Modal Title"
      onOk={() => modal.hide()}
      visible={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
      cancelText="Close Modal"
      okText="Confirm"
    >
      Hello {name}!
    </Modal>
  );
});
