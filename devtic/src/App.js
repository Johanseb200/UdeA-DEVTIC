import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import User_master from './user_master/pages/User_master';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/User_master" exact>
          <User_master/>
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
