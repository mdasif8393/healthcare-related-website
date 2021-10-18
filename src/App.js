import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>

      <Header></Header>

      <Switch>

        <Route exact path="/home">
          <Home></Home>
        </Route>
        
        
        <Route exact path="/">
          <Home></Home>
        </Route>


        <Route exact path="/doctors/:specialist">
          <Details></Details>
        </Route>
        
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>

    </Router>
  );
}

export default App;
