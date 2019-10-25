import React from "react";
import ToastAnimated, { showToast } from "./ui-lib/toast";

export default function App() {
  const handleClick = () =>
    showToast({ type: "success", message: "Mensagem de sucesso" });
  return (
    <>
      <ToastAnimated />
      <button onClick={handleClick}>Mostrar toast de sucesso</button>
    </>
  );
}
