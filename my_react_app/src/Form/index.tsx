import React from "react";
import Button from "./FormBtn";
import Input from "./FormInput";

const Form = () => {
  return (
    <>
      <Input inputName="Фамилия" />
      <Input inputName="Имя" />
      <Input inputName="Почта" />
      <Button />
    </>
  );
};
export default Form;
