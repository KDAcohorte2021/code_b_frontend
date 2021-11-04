/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
	BackgroundStyle,
	ChildrenBackgroundstyle,
	BaliseLeft,
	BaliseRight,
	DroitStyle
} from "../../styles/authentification";
import BackgraoundImage from "../../assets/icons/background-authentification.png";
import BalisesImage from "../../assets/icons/3balise.svg";
import BaliseImage from "../../assets/icons/balise.svg";
export default function Background({ children }) {
	return (
		<>
			<BackgroundStyle>
				<BaliseLeft>
					<img src={BalisesImage.src} alt="balises de gauche illustratif  " />
				</BaliseLeft>
				<img
					src={BackgraoundImage.src}
					alt="background image pour l'authentification "
				/>
				<ChildrenBackgroundstyle>{children}</ChildrenBackgroundstyle>
				<BaliseRight>
					<img src={BaliseImage.src} alt="balises de gauche illustratif  " />
				</BaliseRight>
				<DroitStyle>
					<span>Politique de confidentialité</span>
					<span>
						<span>codeBèeh</span>Tous droits réservés
					</span>
				</DroitStyle>
			</BackgroundStyle>
		</>
	);
}
