import React from "react";
import { HeaderStyle } from "../../styles/authentification";
import Image from "next/image";
import logo from "../../public/logo/__CodeBèeh.svg";
export default function Header() {
	return (
		<HeaderStyle>
			<div className="logo">
				<Image
					src={logo.src}
					alt="logo illustrative de codeBèeh"
					width={301}
					height={58}
				/>
			</div>
		</HeaderStyle>
	);
}
