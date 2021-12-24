import React from "react";
import "./Footer.css";

const Footer = (props: any) => {
  const { changeUserName } = props;
  const sendData = () => {};
  // const clearForm = () => {
  //   changeUserName("");
  // };
  return (
    <div className="form_button">
      <button onClick={() => changeUserName("")} type="button" className="btn">
        Очистить форму
      </button>
      <button onClick={sendData} type="button" className="btn">
        Отправить данные
      </button>
    </div>
  );
};
export default Footer;
