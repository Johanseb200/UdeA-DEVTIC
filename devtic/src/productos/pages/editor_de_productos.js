
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import { useParams, useHistory } from "react-router-dom";

import ProductoForm from '../components/ProductoForm';


const Editor_de_productos = ({ productos, setProductos }) => {
    
    const history = useHistory();

    const { productoId } = useParams();


    const [newProduct, setNewProduct] = useState({
        title: "",
        descripcion: "",
        price: 0,
        disponible: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.productos.getProducto(productoId);
            setNewProduct(response);
        };
        fetchData();
    }, [productoId]);

    const handleChange = (event) => {
        setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
        console.log(newProduct);
    };
    const handleClick = () => {
        api.productos.edit(newProduct);
        //api.productos.edit(newProduct);
        //alert("Producto Editado!");
        history.push("/maestro_de_productos");
    };

    return(
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Editor de Productos</h1>
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

export default Editor_de_productos;