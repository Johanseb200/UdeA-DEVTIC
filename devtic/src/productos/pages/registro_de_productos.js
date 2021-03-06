
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import { useHistory } from "react-router-dom";
import ProductoForm from '../components/ProductoForm';


const Registro_de_productos = ({ productos, setProductos }) => {
    const history = useHistory();

    const [newProduct, setNewProduct] = useState({
        title: "",
        descripcion: "",
        price: 0,
        disponible: true,
    });

    const handleChange = (event) => {
        setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
        console.log(newProduct);
    };
    const handleClick = () => {
        api.productos.create(newProduct);
        alert("Producto Creado!");
        //history.push("/maestro_de_productos");
    };

    return(
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Registro de Productos</h1>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs ={6}>
                        <ProductoForm handleChange={handleChange} handleClick={handleClick} formValue={newProduct} />
                        

                    </Col>
                </Row>
            </Container>
        </React.Fragment>


        
    );    

};

export default Registro_de_productos;