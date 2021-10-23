import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import { useParams, useHistory } from "react-router-dom";

import UsuarioForm from '../components/UsuarioForm';


const Editor_de_Usuario = ({ usuarios, setUsuarios }) => {
    
    const history = useHistory();

    const { usuarioId } = useParams();


    const [newUsuario, setNewUsuario] = useState({
        nombre: "",
        identificacion: "",
        correo: "",
        direccion: "",
        rol: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.usuarios.getUsuario(usuarioId);
            setNewUsuario(response);
        };
        fetchData();
    }, [usuarioId]);

    const handleChange = (event) => {
        setNewUsuario({ ...newUsuario, [event.target.name]: event.target.value });
        console.log(newUsuario);
    };
    const handleClick = () => {
        api.usuarios.edit(newUsuario);
        //api.productos.edit(newProduct);
        //alert("Producto Editado!");
        history.push("/Maestro_de_Usuarios");
    };

    return(
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Editor de Usuarios</h1>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs ={6}>
                        <UsuarioForm handleChange={handleChange} handleClick={handleClick} formValue={newUsuario} />
                        

                    </Col>
                </Row>
            </Container>
        </React.Fragment>


        
    );    

};

export default Editor_de_Usuario ;