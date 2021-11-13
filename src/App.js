import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/Dashboard/Dashboard/DashBoard';
import ExploreAllProducts from './Pages/ExploreAllProducts/ExploreAllProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/purchase">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/exploreAllProducts">
              <ExploreAllProducts />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
