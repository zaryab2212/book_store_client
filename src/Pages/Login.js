import React from "react";
import { Form } from "react-router-dom";
import NewForm from "../Componets/NewForm";

const Login = () => {
  return (
    <div className="mt-4 px-2">
      <NewForm heading={"Login Here"} type={"login"} />
    </div>
  );
};

export default Login;
