import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import {
	Form,
	InputStyle,
	TextExplicatifStyle,
	ButtonStyle
} from "../styles/authentification/login";
import Link from "next/link";
export default function EmailConfirmation() {
	return (
		<>
			<Background>
				<Header />
				<Form>
					<h1>Vérifie tes e-mails</h1>
					<TextExplicatifStyle>
						Nous avons envoyé un e-mail de réinitialisation du mot de passe.
					</TextExplicatifStyle>
					<ButtonStyle>
						<TextExplicatifStyle className="marginNone">
							<Link href="/login">Retour à la page d’acceuil</Link>
						</TextExplicatifStyle>
					</ButtonStyle>
				</Form>
			</Background>
		</>
	);
}
