import { useContext } from 'react';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { Sun, Moon } from 'phosphor-react';
import { Container, Options } from './styles';
import SubMenu from './SubMenu/SubMenu';

interface Props {
    toggleTheme(): void;
}

export default function Header(props: Props) {

    const theme = useContext(ThemeContext)

    return (
        <Container>

            <SubMenu />

            <Options>

                <h1> Menu</h1>

                <h1>Gabriel de Jesus Silva</h1>

                <h1>Sales Report</h1>

            </Options>

            <div>

                <Switch
                    onChange={props.toggleTheme}
                    checked={theme?.title === 'dark'}
                    uncheckedIcon={<Sun size={26} color='black' />}
                    checkedIcon={<Moon size={28} color='black' />}
                    onColor={'#FFFF00'}

                />

            </div>

        </Container>
    )
}
