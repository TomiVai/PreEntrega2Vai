import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

const App = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = (product) => {
    setCartItemsCount((prevCount) => prevCount + 1);
    console.log('Producto agregado al carrito:', product);
  };

  return (
    <Router>
      <div>
        <Navbar cartItemsCount={cartItemsCount} />
        <Switch>
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/placas-de-video" render={() => <ItemListContainer category="placas-de-video" addToCart={addToCart} />} />
          <Route path="/monitores" render={() => <ItemListContainer category="monitores" addToCart={addToCart} />} />
          <Route path="/otros" render={() => <ItemListContainer category="otros" addToCart={addToCart} />} />
          <Route path="/" render={() => <ItemListContainer addToCart={addToCart} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
