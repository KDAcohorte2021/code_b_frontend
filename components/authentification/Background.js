/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
	BackgroundStyle,
	ChildrenBackgroundstyle,
	BaliseLeft,
	BaliseRight
} from "../../styles/authentification/login";
import BackgraoundImage from "../../public/icons/background-authentification.png";
import BalisesImage from "../../public/icons/3star.svg";
import BaliseImage from "../../public/icons/star.svg";
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
			</BackgroundStyle>
		</>
	);
}
