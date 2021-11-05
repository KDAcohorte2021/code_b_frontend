import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import { SignupStyle } from "../styles/authentification/signup";
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
            <div>
              <input name="" placeholder="Pseudo" />
            </div>
            <div>
              <input name="" placeholder="Adresse email" />
            </div>
            <div>
              <input name="" placeholder="Mot de passe" />
            </div>
            <button type="submit">S'inscrire</button>
          </form>
          <div className="login">
            Tu as deja un compte? <Link href="/login">connexion</Link>
          </div>
        </SignupStyle>
      </Background>
    </>
  );
}
