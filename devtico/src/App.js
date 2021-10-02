
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Error from './Shared/Error'
import Home from './Home/pages/Home';
import Maestro from './Ventas/pages/Maestro';
import Registro from './Ventas/pages/Registro';
import Header from "./Shared/Header"
import Registro_de_productos from "./productos/pages/registro_de_productos";
import Maestro_de_productos from "./productos/pages/maestro_de_productos";
import Usuario_maestro from "./Usuario/pages/Usuario_maestro";
import LoginButton from './components/Login';
const App = () => {


  return (
    <div>
      <Router>
        <Header />
        <Switch>
          
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/registro_de_ventas" exact> 
            <Registro/>
          </Route>
          <Route path="/maestro_de_ventas" exact> 
            <Maestro/>
          </Route>
          <Route path="/maestro_de_productos" exact> 
            <Maestro_de_productos/>
          </Route>
          <Route path="/registro_de_productos" exact> 
            <Registro_de_productos/>
          </Route>
            <Route path="/usuario_maestro" exact> 
            <Usuario_maestro/>
          </Route> 
          <Route path="/LoginButton" exact>
            <LoginButton/>
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
