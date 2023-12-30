import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Catalogo";
import Alta from "./components/Alta";
import Contacto from "./components/Contacto";
import Cart from "./components/Carrito";
import Footer from "./components/Footer";
import {
  addToCart,
  removeFromCart,
  submitProducto,
  submitComentario,
  removeElementToCart,
  addElementToCart,
} from "./services/api";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (producto) => {
    setCartItems(addToCart(cartItems, producto));
  };

  const handleRemoveFromCart = (productoId) => {
    setCartItems(removeFromCart(cartItems, productoId));
  };

  const handleProductoSubmit = (productoData) => {
    submitProducto(productoData).then((data) => console.log(data));
  };

  const handleComentarioSubmit = (comentarioData) => {
    submitComentario(comentarioData).then((data) => console.log(data));
  };

  const handleCleanCart = () => {
    setCartItems([]);
  };

  const handleRemoveElement = (productoId) => {
    setCartItems(removeElementToCart(cartItems, productoId));
  };
  const handleAddElement = (productoId) => {
    setCartItems(addElementToCart(cartItems, productoId));
  };

  return (
    <Router>
      <div className="bg-dark">
        <Navbar bg="secondary" expand="lg" sticky="top">
          <Navbar.Brand className="ms-3 text-light" as={Link} to="/">
            Tienda VicenteLopez
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto px-5">
              <Nav.Link className="text-light" as={Link} to="/">
                Catalogo
              </Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/alta">
                Alta
              </Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/contacto">
                Contacto
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onClick={console.log(cartItems)}
                className="fs-2 ms-auto px-3"
                as={Link}
                to="/cart"
              >
                🛒
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route clas path="/" element={<Home addToCart={handleAddToCart} />} />
          <Route
            path="/alta"
            element={<Alta onSubmit={handleProductoSubmit} />}
          />
          <Route
            path="/contacto"
            element={<Contacto onSubmit={handleComentarioSubmit} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={handleRemoveFromCart}
                removeElement={handleRemoveElement}
                addElement={handleAddElement}
                clearCart={handleCleanCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
