import React, { useState } from 'react';
import { Container, Card, BtPlay, Label, BtCreateSlash } from './styleDevelopperNiveau';

export default function ProfileGrid() {
	const length = new Array(8);
	const data = [
		{ nom: "1" },
		{ nom: "1" },
		{ nom: "1" },
		{ nom: "1" }];
	// console.log(data);
	return (
		<>
			<Label>DÉVELOPPEZ VOTRE NIVEAU</Label>
			<Container>
				
				{data.map((index) => (
					
					<Card key={index} color={
						`${
							index !== 0 ||data.length
							? '#8CA0D6'
							: '#4CAF50'
						}`
					  }>
						<BtCreateSlash>Créer un Clash</BtCreateSlash>
						<BtPlay >Jouer</BtPlay>
					</Card>
				))}
			</Container>
		</>
	);
}
