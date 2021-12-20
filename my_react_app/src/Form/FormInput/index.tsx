import React from "react";

type InputPropsType = {
  inputName: string;
};

const Input: React.FC<InputPropsType> = (props) => {
  const { inputName } = props;
  return (
    <div className="form_input">
      <input>gre</input>
    </div>
  );
};
export default Input;
