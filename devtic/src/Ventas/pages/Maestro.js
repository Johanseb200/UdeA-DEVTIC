
import Reloj from '../components/Reloj'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Table from 'react-bootstrap/Table'
import api from '../../api'


const Maestro =({ ventas, setVentas}) => {

    const deleteVenta = (event) => {
        const id = event.target.id;
        api.ventas.delete(id);
        console.log(ventas);
        const newVenta = ventas.filter((venta) => venta.id !== id);
        setVentas([...newVenta])

    };
    
    return(

        <div>
            <h1 className="d-flex justify-content-center mt-5 mb-5">Maestro de Productos</h1>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Documento</th>
                        <th>Cliente</th>
                        <th>Vendedor</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((ventas) => {
                            return(
                            <tr>
                                <td>{ventas._id}</td>
                                <td>{ventas.documento}</td>
                                <td>{ventas.cliente}</td>
                                <td>{ventas.vendedor}</td>
                                <td>{ventas.total}</td>
                                <td>{ventas.estado}</td>
                                <td>
                                    <Button
                                    variant="secondary"
                                    onClick={deleteVenta}
                                    id={ventas._id}
                                    className="ms-4"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash2-fill" viewBox="0 0 16 16">
                                    <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
                                    </svg>
                                    </Button>
                                    </td>
                                    <td>
                                

                                    <Button
                                    variant="success"
                                    //onClick={popProduct}
                                    id={ventas._id}
                                    className="ms-4"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
                                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
                                    </svg>
                                    </Button>
                                </td>



                            </tr>

                            );
                        })}
                        
                        
                    </tbody>
                </Table>

                <Nav variant="pills" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">Modificar Ventas</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
                </Container>

                
        </div>


    );

}
export default Maestro;