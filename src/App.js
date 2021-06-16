import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import Contactus from "./Contactus"
import Venues from "./Venues"
import Packages from "./Packages"
import Famous from "./Famous"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
function App() {
  return (

   <Router>
   <Navbar/>
   <Switch>
     <Route exact path="/destinationplan" component={Home}></Route>
     <Route path="/contactus" component={Contactus}></Route>
     <Route path="/venues" component={Venues}></Route>
     <Route path="/packages" component={Packages}></Route>
     <Route path="/famousplaces" component={Famous}></Route>
   </Switch>
   </Router>
  );
}

export default App;
