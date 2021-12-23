import React from "react";

const Header = () => {
  return (
    <>
      <div className="header_nav">
        <img
          src="https://www.debian.org/logos/officiallogo-nd-50.jpg"
          alt="logo"
        />
        <h2 className="headerText">
          Добро пожаловать! Заполните форму для регистрации
        </h2>
        <button type="button" className="button_exit">
          <img src="https://pngimg.com/uploads/exit/exit_PNG22.png" alt="" />
        </button>
      </div>
    </>
  );
};
export default Header;
