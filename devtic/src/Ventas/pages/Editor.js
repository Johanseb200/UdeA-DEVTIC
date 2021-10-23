import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import { useParams, useHistory } from "react-router-dom";

import VentaForm from '../components/VentaForm';


const Editor_de_ventas = ({ ventas, setVentas }) => {
    
    const history = useHistory();

    const { ventaId } = useParams();


    const [newVenta, setNewVenta] = useState({
        documento: "",
        cliente: "",
        vendedor: "",
        total: 0,
        estado: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.ventas.getVenta(ventaId);
            setNewVenta(response);
        };
        fetchData();
    }, [ventaId]);

    const handleChange = (event) => {
        setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
        console.log(newVenta);
    };
    const handleClick = () => {
        api.ventas.edit(newVenta);
        //api.productos.edit(newProduct);
        //alert("Producto Editado!");
        history.push("/maestro_de_ventas");
    };

    return(
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Editor de Ventas</h1>
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

export default Editor_de_ventas;