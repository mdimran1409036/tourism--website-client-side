import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AddService from './Pages/AddService/AddService';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services/add">
              <AddService></AddService>
            </Route>
            <PrivateRoute exact path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manage-orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;