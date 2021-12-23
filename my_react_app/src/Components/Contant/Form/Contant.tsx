import React from "react";
import Input from "./FormInput";

const Contant = () => {
  return (
    <>
      <Input inputName="Фамилия" inputType="text" />
      <Input inputName="Имя" inputType="text" />
      <Input inputName="Почта" inputType="email" />
      <Input inputName="Пароль" inputType="password" />
      <Input inputName="Повторите пароль" inputType="password" />
    </>
  );
};
export default Contant;
