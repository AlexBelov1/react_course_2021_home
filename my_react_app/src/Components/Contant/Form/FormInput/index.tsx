import React from "react";

type InputPropsType = {
  inputName: string;
  inputType: string;
  inputValue: string;
  changeInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { inputName, inputType, inputValue, changeInputValue } = props;

  return (
    <div className="form_input">
      <span>{inputName}</span>
      <input
        onChange={(e: any) => changeInputValue(e.target.value)}
        placeholder={inputName}
        type={inputType}
        value={inputValue}
        id="form_input_id"
      />
    </div>
  );
};
export default Input;
