import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import {
	Form,
	InputStyle,
	TextExplicatifStyle,
	ButtonStyle
} from "../styles/authentification/login";
import Link from "next/link";
export default function ResetPassword() {
	return (
		<>
			<Background>
				<Header />
				<Form>
					<h1>Réinitialisation de mot de passe</h1>
					<InputStyle placeholder="Adresse email" name="email" />

					<ButtonStyle>Réinitialiser</ButtonStyle>
					<TextExplicatifStyle className="inscription">
						Retour à la page de
						<Link href="/login"> Connection</Link>
					</TextExplicatifStyle>
				</Form>
			</Background>
		</>
	);
}
