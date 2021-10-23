import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () =>{
    return(
        

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">DEVTIC</Navbar.Brand>
                
                <Nav className="me-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/registro_de_ventas">Registro de Ventas</Nav.Link>
                    <Nav.Link href="/maestro_de_ventas">Maestro de Ventas</Nav.Link>
                    <Nav.Link href="/registro_de_productos">Registro de productos</Nav.Link>
                    <Nav.Link href="/maestro_de_productos">Maestro de productos</Nav.Link>
                    <Nav.Link href="/usuario_maestro">Maestro de Usuarios</Nav.Link>
                    <Nav.Link href="/">Salir</Nav.Link>


                </Nav>
            </Container>
        </Navbar>
    );

}

export default Header;