import { CardWrapper } from "@/components/auth/card-wrapper";
import React from "react";

const Login = () => {
  return (
    <CardWrapper
      backButtonLabel="Sign Up"
      backButtonHref="/"
      backButtonMessage="Don't have an account ?"
      title="Hello There"
      description="Its never late to start"
      showsocial
      action="Login"
    >
      <div>Login</div>
    </CardWrapper>
  );
};

export default Login;
