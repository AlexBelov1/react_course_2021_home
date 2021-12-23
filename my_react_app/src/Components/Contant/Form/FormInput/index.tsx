import React, { useState } from "react";

type InputPropsType = {
  inputName: string;
  inputType: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { inputName, inputType } = props;
  const [value, setValue] = useState(``);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="form_input">
      <span>{inputName}</span>
      <input
        onChange={changeHandler}
        placeholder={inputName}
        type={inputType}
        value={value}
        id="form_input_id"
      />
    </div>
  );
};
export default Input;
