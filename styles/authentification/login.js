import styled from "styled-components";

export const Form = styled.form`
	width: 40%;
	margin: auto;
	color: white;
	h1 {
		text-align: center;
		font-weight: 300;
		font-size: 2.5em;
	}
	@media screen and (max-width: 650px) {
		width: 60%;
	}
	@media screen and (max-width: 450px) {
		width: 80%;
	}
	@media screen and (max-height: 450px) {
		h1 {
			font-size: 1.5em;
		}
	}
`;
export const InputStyle = styled.input`
	height: 50px;
	width: 100%;
	background: white;
	border-radius: 10px;
	border: 3px solid transparent;
	margin-top: 30px;
	padding: 0 10px;
	transition: 0.3s;
	@media screen and (max-height: 450px) {
		height: 40px;
		margin-top: 20px;
	}
	&::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}
	&:focus {
		outline: none;
		border: 3px solid rgba(0, 0, 0, 0.5);
	}
`;
export const TextExplicatifStyle = styled.span`
	display: inline-block;
	margin-top: 20px;
	width: 100%;
	text-align: center;

	@media screen and (max-height: 450px) {
		margin-top: 10px;
		font-size: 0.9em;
	}
	&.marginNone {
		margin-top: 0;
		a {
			&:hover {
				text-decoration: none;
			}
		}
	}
	&.inscription {
		a {
			font-weight: 900;
		}
	}
	a {
		text-decoration: none;
		color: white;
		&.inscription {
			font-weight: bolder;
		}
		&:hover {
			cursor: pointer;
			text-decoration: underline;
		}
		&:focus {
			outline: none;
			border-bottom: 3px solid rgba(0, 0, 0, 0.5);
		}
	}
`;

export const ButtonStyle = styled.button`
	height: 50px;
	width: 100%;
	border: 1px solid white;
	border-radius: 10px;
	background: transparent;
	margin-top: 20px;
	color: white;
	@media screen and (max-height: 450px) {
		height: 40px;
		margin-top: 10px;
	}
	&:focus {
		outline: none;
	}
`;
export const ButtonLink = styled.link`
	height: 50px;
	width: 100%;
	border: 1px solid white;
	border-radius: 10px;
	background: transparent;
	margin-top: 20px;
	color: white;
	&:focus {
		outline: none;
	}
`;
