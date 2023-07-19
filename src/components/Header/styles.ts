import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color:${props => props.theme.colors.secundary_background}; ;
box-shadow: 0 0 10px 2px black;
align-items: center;
height: 8vh;
padding:0 4%;
color: ${props => props.theme.colors.text};

font-size: .85rem;

@media (max-width: 700px) {
    font-size: .6rem;
    justify-content: space-between;
  }


`

export const Options = styled.div`
display: flex;
width:  90%;
justify-content: space-around;


  @media(max-width : 700px) {
  display: none;

}



`



