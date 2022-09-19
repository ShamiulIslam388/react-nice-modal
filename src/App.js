import "./styles.css";
import "antd/dist/antd.css";
import NiceModal from "@ebay/nice-modal-react";
import NiceModalComp from "./NiceModalComp";

export default function App() {
  const showModal = () => {
    NiceModal.show(NiceModalComp, { name: "shamiul" });
  };
  return (
    <div className="App">
      <h1>Nice modal Example</h1>
      <button onClick={showModal}>show modal</button>
    </div>
  );
}
