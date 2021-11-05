/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import {
	Form,
	InputStyle,
	TextExplicatifStyle,
	ButtonStyle
} from "../styles/authentification/login";
import Link from "next/link";
export default function Login() {
	return (
		<>
			<Background>
				<Header />
				<Form>
					<h1>Connexion</h1>
					<InputStyle placeholder="Adresse email" name="email" />
					<InputStyle placeholder="Mot de passe" name="password" />
					<TextExplicatifStyle>
						<Link href="/reset-password">Mot de passe oublié?</Link>
					</TextExplicatifStyle>
					<ButtonStyle onClick={(e) => e.preventDefault()}>
						Se connecter
					</ButtonStyle>
					<TextExplicatifStyle className="inscription">
						Vous n'avez pas encore de compte
						<Link href="/signup"> Inscrivez vous </Link>
					</TextExplicatifStyle>
				</Form>
			</Background>
		</>
	);
}
