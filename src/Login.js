import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
`;

const FormHeader = styled.h2`
  text-align: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
        <FormHeader>Login</FormHeader>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginContainer>
      );
};

export default Login;
