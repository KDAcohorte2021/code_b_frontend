import styled from "styled-components";

export const BackgroundStyle = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	svg,
	img {
		height: 100%;
		width: 100%;
	}
`;

export const HeaderStyle = styled.div`
	height: 140px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.logo {
	}
	@media screen and (max-width: 650px) {
		height: 100px;
		.logo {
			height: 30px;
			width: 200px;
		}
	}
`;

export const ChildrenBackgroundstyle = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
export const Relative = styled.div`
	position: relative;
`;

export const BaliseLeft = styled.div`
	position: absolute;
	left: 30px;
	top: 100px;
	width: 55vh;
	height: 55vh;
	img {
		height: 100%;
		width: 100%;
	}
`;
export const BaliseRight = styled.div`
	position: absolute;
	right: 0px;
	bottom: 10px;
	height: 50vh;
	width: 50vh;
	img {
		height: 100%;
		width: 100%;
	}
`;

export const Container = styled.div`
	position: absolute;
`;

export const DroitStyle = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	padding: 20px 0;
	span {
		padding: 10px 15px;
		color: rgba(0, 0, 0, 0.5);
		span {
			font-weight: 900;
		}
	}
	@media screen and (max-width: 1000px) {
		font-size: 0.85em;
	}
	@media screen and (max-width: 800px) {
		font-size: 0.8em;
		padding: 10px 0;
		span {
			display: block;
			padding: 5px 10px;
		}
	}
`;
