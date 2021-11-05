import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import { SignupStyle } from "../styles/authentification/signup";
import { Form } from "../styles/authentification/login";
import Link from "next/link";
export default function Signup() {
  return (
    <>
      <Background>
        <Header />
        <SignupStyle>
            <form>
              <h1>Inscription</h1>

              <div className="user-id">
                <input name="" placeholder="Nom" />
                <input name="" placeholder="Prenom" />
              </div>

              <input name="" placeholder="Pseudo" />

              <input name="" placeholder="Adresse email" />

              <input name="" placeholder="Mot de passe" />

              <button onClick={(e) => e.preventDefault()}>S'inscrire</button>
            </form>
            <span className="inscription">
              Tu as deja un compte?
              <Link href="/login"> connexion </Link>
            </span>
        </SignupStyle>
      </Background>
    </>
  );
}
