import React from "react";

const Button = () => {
  const sendData = () => {};
  return (
    <div className="form_input">
      <button onClick={sendData} type="button">
        Отправить данные
      </button>
    </div>
  );
};
export default Button;
