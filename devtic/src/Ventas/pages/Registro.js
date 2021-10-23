
import Reloj from '../components/Reloj'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import { useHistory } from "react-router-dom";
import VentaForm from '../components/VentaForm';



const Registro =({ ventas, setVentas }) => {
    const history = useHistory();


    const [newVenta, setNewVenta] = useState({
        documento: "",
        cliente: "",
        vendedor: "",
        total: 0,
        estado: "",
    });
    

    const handleChange = (event) => {
        setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
        console.log(newVenta);
    };
    
    const time = new Date().toDateString();
    
    const handleClick = () => {
        api.ventas.create(newVenta);
        alert("Venta Registrada!");
        
    };

    return(
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Registro de Ventas</h1>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs ={6}>
                    <VentaForm handleChange={handleChange} handleClick={handleClick} formValue={newVenta} />
                        

                    </Col>
                </Row>
            </Container>
        </React.Fragment>


        
    );    

};
export default Registro;