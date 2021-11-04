import Background from "../components/authentification/Background";
import Header from "../components/authentification/Header";
import { SignupStyle } from "../styles/authentification/signup";
export default function Signup() {
  return (
    <>
      <Background>
        <Header />
        <SignupStyle>
          <form>
            <h1>Inscription</h1>
            <div className="user-id">
              <input placeholder="Nom" />
              <input placeholder="Prenom" />
            </div>
            <div>
              <input placeholder="Pseudo" />
            </div>
            <div>
              <input placeholder="Adresse email" />
            </div>
            <div>
              <input placeholder="Mot de passe" />
            </div>
            <button type="submit">S'inscrire</button>
          </form>
          <div className="login">
            Tu as deja un compte? <span>connexion</span>
          </div>
        </SignupStyle>
      </Background>
    </>
  );
}
