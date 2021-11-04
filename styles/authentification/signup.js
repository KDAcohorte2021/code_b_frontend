import styled from "styled-components";

export const SignupStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
  }
  form {
    position: absolute;
    width: 398px;
    height: 335px;
    left: 521px;
    top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 0px solid #000;
  }
  form div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0px solid blue;
  }
  div input {
    width: 100%;
    background: #fff;
  }
  .user-id input {
    width: 48%;
  }
  .login {
    position: absolute;
    width: 235px;
    height: 18px;
    left: 603px;
    top: 512px;
    color: #fff;
    font-size: 15px;
  }

  button {
    width: 100%;
    border: 1px solid #fff;
    box-sizing: border-box;
    background-color: transparent;
    color: #fff;
    font-size: 18px;
  }
  input,
  button {
    padding: 1%;
    border-radius: 10px;
  }
  span {
    text-decoration: bold;
  }
`;
