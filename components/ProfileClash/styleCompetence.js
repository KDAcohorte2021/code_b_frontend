import styled from "styled-components";

export const Container = styled.div`
display: flex;
margin:5px;
width: 431px;
height: 60px;
box-sizing: border-box;
flex-direction:column;
gap:11px;
background: rgba(196, 196, 196, 0.18);;
`;
export const ContainerTextAndCardColor = styled.div`
display: flex;
flex-direction:row;
align-items: center ; 
width: 431px;
height: 60px;
background: #E2E2E1;
`;
export const ContainerTextAndDesc = styled.div`
display: flex;
flex-direction:column; 
margin:3px;
background: transparent;
`;

export const CardColor = styled.div`
width: 80px;
height: 60px;
background: ${props => props.color};
`;

export const Title = styled.label`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: -0.017em;
color: #000000;
`;
export const Description = styled.label`
font-family: Inter;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
letter-spacing: -0.017em;

color: rgba(0, 0, 0, 0.63);
`;