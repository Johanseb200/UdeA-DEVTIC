
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import api from "../../api";
import { useHistory } from "react-router-dom";
import UsuarioForm from '../components/UsuarioForm';



const Registro_de_usuario =({ usuarios, setUsuarios }) => {
    const history = useHistory();


    const [newUsuario, setNewUsuario] = useState({

        nombre: "",
        identificacion: "",
        correo: "",
        direccion: "",
        rol: "",

    });
    

    const handleChange = (event) => {
        setNewUsuario({ ...newUsuario, [event.target.name]: event.target.value });
        console.log(newUsuario);
    };
    
    
    
    const handleClick = () => {
        api.usuarios.create(newUsuario);
        alert("Usuario Registrado!");
        
    };

    return(
        <React.Fragment>
            <h1 className="text-center mt-5 mb-5">Registro de Usuarios</h1>
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

export default Registro_de_usuario;