import React from "react";
import Input from "../FormInput";

const Button = () => {
  const sendData = () => {};
  const clearData = () => {};
  return (
    <div className="form_input">
      <button onClick={clearData} type="button">
        Очистить форму
      </button>
      <button onClick={sendData} type="button">
        Отправить данные
      </button>
    </div>
  );
};
export default Button;
