import styled from "styled-components";


export const Label = styled.label`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 18px;
color: #000000;
`;
export const Container = styled.div`
margin:5px;
box-sizing: border-box;
display: flex;
flex-direction:column;
gap:11px;
`;

export const Card = styled.div`
width: 469px;
height: 100px;
background:${props => props.color};
display: flex;
padding: 5px;
align-items: flex-end ;
`;
//background: ${props => props.color};#8CA0D6

export const BtCreateSlash = styled.button`
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
background:transparent;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 11px;
padding: 11px 35px;
`;
export const BtPlay = styled.button`
background: #FFFFFF;
border: 1px solid #FFFFFF;
border-radius: 11px;
color: #8730A5;
margin-left:10px;
font-family: Inter;
font-style: normal;
font-weight: 500;
`;