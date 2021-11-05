import React from 'react';
import { Container, ContainerTextAndCardColor, ContainerText, CardColor, ContainerTextAndDesc, Title, Description } from './styleCompetence';


const switchColors = (title) => {
	switch (title) {
		case 'HTML challenge': {
			const colors = "#8CA0D6"
			return colors;
		}
		case 'SCRUM challenge': {
			const colors = "#927989"
			return colors;
		}
		case 'React challenge': {
			const colors = "#9E1183"
			return colors;
		}
		case 'gospel': {
			const colors = "#756ABF"
			return colors;
		}
		default: {
			const colors = "#89AEFF"
			return colors;
		}
	}
};


export default function ProfileClash() {
	const data = [
		{
			title: "JavaScript",
			description: "Lorem ipsum dolor sit amet amet"
		}, {
			title: "HTML challenge",
			description: "Lorem ipsum dolor sit amet amet"
		}, {
			title: "JS challenge",
			description: "Lorem ipsum dolor sit amet amet"
		}, {
			title: "SCRUM challenge",
			description: "Lorem ipsum dolor sit amet amet"
		}, {
			title: "React challenge",
			description: "Lorem ipsum dolor sit amet amet"
		}]
	let color = "#89AEFF"
	const colors = [
		"#89AEFF",
		"#8CA0D6",
		"#927989",
		"#9E1183",
		"#756ABF"]
	return (
		<>
			<Title>CLASHS JOUÉS</Title>
			<Container>
				{data.map((value, index) => (< ContainerTextAndCardColor key={index}>
					<CardColor color={colors[index]} />
					<ContainerTextAndDesc>
						<Title>{value.title}</Title>
						<Description>
							{value.description}
						</Description>
					</ContainerTextAndDesc>
				</ContainerTextAndCardColor>))

				}
			</Container>
		</>



	);
}
