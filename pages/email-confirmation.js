import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import {
	Form,
	InputStyle,
	TextExplicatifStyle,
	ButtonStyle
} from "../styles/authentification/login";
import { useRouter } from "next/router";
export default function EmailConfirmation() {
	const router = useRouter();
	return (
		<>
			<Background>
				<Header />
				<Form>
					<h1>Vérifié vos mails</h1>
					<TextExplicatifStyle>
						Nous vous avons envoyé un mail de réinitialisation :).
					</TextExplicatifStyle>
					<ButtonStyle
						onClick={(e) => {
							e.preventDefault();
							router.push("/login");
						}}
					>
						Retour à la page d’acceuil
					</ButtonStyle>
				</Form>
			</Background>
		</>
	);
}
