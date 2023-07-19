import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

        title: string,

        colors: {
            primary:string,
            secundary: string,
            primary_background: string,
            secundary_background: string,
            text: string
        }
    }
}