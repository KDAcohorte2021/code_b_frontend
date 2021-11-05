import styled from "styled-components";

export const SignupStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    border: 0px solid blue;
    @media screen and (max-height: 450px) {
		height: 40px;
		margin-top: 20px;
	}
    h1{
      color:#fff;
    }

  form {
    width:40%;
    height:335px;
    margin:auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    flex-direction:column;
  }

 form input, form button {
   width:100%;
    padding:1.5%;
    border-radius:10px;
  }
  input{
    border:none;
  }
  input::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}
  input:focus {
		outline: none;
		border: 3px solid rgba(0, 0, 0, 0.5);
	}
  button, button:focus{
    border:1px solid #fff;
    background:transparent;
    color:#fff;
    font-size:18px;
    outline:none;
  }
  .user-id{
    width:100%;
    display:flex;
    justify-content:space-between;
  }
  .user-id input {
    width: 49.2%;
  }
  .inscription{
    margin-top:1%;
    font-size:15px;
    color:#fff;
  }
  .inscription a{
    color:#fff;
    text-decoration:none;
    font-weight:700;
  }
  a:hover{
    cursor: pointer;
			text-decoration: underline;
  }
 */}
`;
