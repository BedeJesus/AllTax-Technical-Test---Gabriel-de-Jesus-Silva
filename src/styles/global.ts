import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
       @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');
       font-family: 'Dosis', sans-serif;
    }

   body{
    background-color: ${props => props.theme.colors.primary_background}; 

   }
 `