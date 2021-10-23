import GoogleLogin from 'react-google-login';
import React from 'react';
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Bienvenidos =() => {

    const responseGoogle = (response) => {
        console.log(response);
        alert("Logeado con exito, Bienvenido "+ response.profileObj.name);
    }
    return(

        <div>
            <h1 className="d-flex justify-content-center mt-5 mb-5">Bienvenidos a</h1>
            <h1 className="d-flex justify-content-center mt-5 mb-5">DEVTIC</h1>
            <h1 className="d-flex justify-content-center mt-5 mb-5">Interfaz de autentificacion con Google</h1>
            
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={1}>
                    <GoogleLogin
                    clientId="43292055055-le41o6pt9elcjdog30ui34ngi9h2g3s2.apps.googleusercontent.com"
                    buttonText="Iniciar Sesion"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                
                    cookiePolicy={'single_host_origin'}
                    />,
                    
                        

                    </Col>
                </Row>

            </Container>
            

        </div>


    );
};

export default Bienvenidos;