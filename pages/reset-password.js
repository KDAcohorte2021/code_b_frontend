import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import {
	Form,
	InputStyle,
	TextExplicatifStyle,
	ButtonStyle
} from "../styles/authentification/login";
import Link from "next/link";
import { useRouter } from "next/router";
export default function ResetPassword() {
	const router = useRouter();
	return (
		<>
			<Background>
				<Header />
				<Form>
					<h1>Réinitialisation du mot de passe</h1>
					<InputStyle placeholder="Adresse email" name="email" />

					<ButtonStyle
						onClick={(e) => {
							e.preventDefault();
							router.push("/email-confirmation");
						}}
					>
						Réinitialiser
					</ButtonStyle>
					<TextExplicatifStyle className="inscription">
						Retour à la page de
						<Link href="/login"> Connection</Link>
					</TextExplicatifStyle>
				</Form>
			</Background>
		</>
	);
}
