import React, { useState } from "react";
import Header from "./Header/Header";
import Contant from "./Contant/Form/Contant";
import Footer from "./Footer/Footer";

const Form = () => {
  const [userName, setInputUserName] = useState("");
  return (
    <>
      <Header />
      <Contant userName={userName} changeUserName={setInputUserName} />
      <Footer changeUserName={setInputUserName} />
    </>
  );
};
export default Form;
