import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cart from "../pages/Cart";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SingleData from "../pages/SingleItem";

  const Routing = () => {
      return (
          <>
          <Router>
            <Navbar />
             <Switch>
             <Route path="/product/:id" exact>
                    <SingleData />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/shop" exact>
                    <Shop />
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
             </Switch>
          </Router>
          <Footer />
          </>
      )
  }

  export default Routing;