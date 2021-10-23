
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Error from './Shared/Error'
import Home from './Home/pages/Home';

import Header from "./Shared/Header";

import Registro_de_productos from "./productos/pages/registro_de_productos";
import Editor_de_productos from "./productos/pages/editor_de_productos";
import Maestro_de_productos from "./productos/pages/maestro_de_productos";

import Maestro from './Ventas/pages/Maestro';
import Registro from './Ventas/pages/Registro';
import Editor_de_ventas from './Ventas/pages/Editor';

import  Editor_de_Usuario from './Usuario/pages/Editor_de_Usuario'
import Maestro_de_Usuario from './Usuario/pages/Maestro_de_Usuario'
import Registro_de_Usuario from './Usuario/pages/Registro_de_Usuario'



import api from './api';
import React, { useState } from 'react';
import { useEffect } from 'react';

import Bienvenidos from './Home/pages/Bienvenidos';






function App() {
  
  const [productos,setProductos] = useState([]);
  const [ventas,setVentas] = useState([]);
  const [usuarios,setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.productos.list();
      console.log(response);
      setProductos(response);
    };
    fetchData();
    

  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.ventas.list();
      console.log(response);
      setVentas(response);
    };
    fetchData();
    

  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const response = await api.usuarios.list();
      console.log(response);
      setUsuarios(response);
    };
    fetchData();
    

  }, []);

  return (
    <div>
      
      
      <Router>
        <Header />
        <Switch>
          
          <Route path="/" exact>
            <Bienvenidos/>
          </Route>
          <Route path="/Home" exact>
            <Home/>
          </Route>

          <Route path="/registro_de_ventas" exact> 
            <Registro ventas={ventas}/>
          </Route>

          <Route path="/maestro_de_ventas" exact> 
            <Maestro ventas={ventas} setVentas={setVentas} />
          </Route>

          <Route path="/maestro_de_ventas/Edit/:ventaId" exact> 
            <Editor_de_ventas ventas={ventas} setVentas={setVentas} />
          </Route>

          <Route path="/maestro_de_productos" exact> 
            <Maestro_de_productos productos={productos} setProductos={setProductos}/>
          </Route>

          <Route path="/maestro_de_productos/Edit/:productoId" exact> 
            <Editor_de_productos productos={productos} setProductos={setProductos}/>
          </Route>

          <Route path="/registro_de_productos" exact> 
            <Registro_de_productos productos={productos} />
          </Route>

          <Route path="/Registro_de_Usuarios" exact> 
            <Registro_de_Usuario usuarios={usuarios}/>
          </Route>

          <Route path="/Maestro_de_Usuarios" exact> 
            <Maestro_de_Usuario usuarios={usuarios} setUsuarios={setUsuarios} />
          </Route>

          <Route path="/Maestro_de_Usuarios/Edit/:usuarioId" exact> 
            <Editor_de_Usuario usuarios={usuarios} setUsuarios={setUsuarios} />
          </Route>

          

          <Route path="/Error" exact> 
            <Error/>
          </Route>
          <Redirect to="/Error" /> 

        </Switch>

      </Router> 

      
    </div>
    
  );
}

export default App;
