import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const Menu = styled.div`
margin-top:2rem;
display: flex;
justify-content:space-evenly;
`

export const Option = styled.div`
display: flex;
color: ${props => props.theme.colors.text};

span{
    font-size: 1.5rem;   
}

select{
    border-radius: 10px;
    margin-left: .5rem;
}

@media (max-width: 700px) {
    span{
        font-size: 1.2rem;   
    }

}





`

