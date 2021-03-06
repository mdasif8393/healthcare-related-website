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
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Professor from './components/Professor/Professor';
import AssociateProfessor from './components/AssociateProfessor/AssociateProfessor';



function App() {
  return (
    <AuthProvider>
      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/home">
            <Home></Home>
          </Route>
          
          
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>


          <PrivateRoute  path="/doctors/:specialist">
            <Details></Details>
          </PrivateRoute>

          <PrivateRoute path="/professor">
            <Professor></Professor>
          </PrivateRoute>

          <PrivateRoute path="/associateProfessor">
            <AssociateProfessor></AssociateProfessor>
          </PrivateRoute>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>
    </AuthProvider>
    
  );
}

export default App;
