import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

function Features() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1587355760421-b9de3226a046?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />
                <Card.Body>
                    <Card.Title>Vendedor</Card.Title>
                    <Card.Text>
                        Permite ver y actualizar el rol de los vendedores actuales.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Actualizar</Button>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" />
                <Card.Body>
                    <Card.Title>Administrador</Card.Title>
                    <Card.Text>
                    Permite ver y actualizar el rol de los administradores actuales.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Actualizar</Button>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                <Card.Body>
                    <Card.Title>Usuarios</Card.Title>
                    <Card.Text>
                    Permite modificar el estado de los usuarios.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Actualizar</Button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );

}

export default Features;