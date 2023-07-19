import { useState } from 'react'
import { Container, Box, Options } from './styles'

export default function SubMenu() {

    const [show, setShow] = useState(false)

    return (

        <Container>

            <label className="burger" >
                <input id="burger" type="checkbox" onClick={() => show ? setShow(false) : setShow(true)} />
                <span></span>
                <span></span>
                <span></span>
            </label>

            {show && (

                <Box>


                    <Options>

                        <h1>Menu</h1>

                        <h1>Gabriel de Jesus Silva</h1>

                        <h1>Sales Report</h1>
                    </Options>


                </Box>
            )}

        </Container>
    )
}