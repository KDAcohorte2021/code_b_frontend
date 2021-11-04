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
					<h1>connexion</h1>
					<InputStyle placeholder="Adresse email" name="email" />
					<InputStyle placeholder="Mot de passe" name="password" />
					<TextExplicatifStyle>
						<Link href="/reset-password">Mot de passe oublié?</Link>
					</TextExplicatifStyle>
					<ButtonStyle>Se connecter</ButtonStyle>
					<TextExplicatifStyle className="inscription">
						Tu n' as pas encore de compte
						<Link href="/signup"> Inscription</Link>
					</TextExplicatifStyle>
				</Form>
			</Background>
		</>
	);
}
