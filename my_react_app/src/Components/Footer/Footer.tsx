import React from "react";
import "./Footer.css";

const Footer = () => {
  const sendData = () => {};
  const clearForm = () => {};
  return (
    <div className="form_button">
      <button onClick={clearForm} type="button" className="btn">
        Очистить форму
      </button>
      <button onClick={sendData} type="button" className="btn">
        Отправить данные
      </button>
    </div>
  );
};
export default Footer;
