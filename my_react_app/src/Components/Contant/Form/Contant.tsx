import React from "react";
import Input from "./FormInput";

const Contant = (props: any) => {
  const { userName, changeUserName } = props;
  return (
    <>
      {/* <Input
        inputName="Фамилия"
        inputType="text"
        inputValue={inputValue.surname}
        changeInputValue={changeInputValue}
      /> */}
      <Input
        inputName="Имя"
        inputType="text"
        inputValue={userName}
        changeInputValue={changeUserName}
      />
      {/* <Input
        inputName="Почта"
        inputType="email"
        inputValue={inputValue.email}
        changeInputValue={changeInputValue}
      />
      <Input
        inputName="Пароль"
        inputType="password"
        inputValue={inputValue.password}
        changeInputValue={changeInputValue}
      />
      <Input
        inputName="Повторите пароль"
        inputType="password"
        inputValue={inputValue.confirmPassword}
        changeInputValue={changeInputValue}
      /> */}
    </>
  );
};
export default Contant;
