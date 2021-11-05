import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import {
  Form,
  InputStyle,
  TextExplicatifStyle,
  ButtonStyle,
} from "../styles/authentification/login";
import { SignupStyle } from "../styles/authentification/signup";
import Link from "next/link";
export default function Signup() {
  return (
    <>
      <Background>
        <Header />

        <Form>
          <h1>Inscription</h1>
          <SignupStyle>
            <div className="user-id">
              <InputStyle name="" placeholder="Nom" />
              <InputStyle name="" placeholder="Prenom" />
            </div>
          </SignupStyle>

          <InputStyle name="" placeholder="Pseudo" />

          <InputStyle name="" placeholder="Adresse email" />

          <InputStyle name="" placeholder="Mot de passe" />

          <ButtonStyle onClick={(e) => e.preventDefault()}>
            S'inscrire
          </ButtonStyle>
        </Form>
        <TextExplicatifStyle className="inscription">
          Tu as deja un compte?
          <Link href="/login"> connexion </Link>
        </TextExplicatifStyle>
      </Background>
    </>
  );
}
