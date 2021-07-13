// import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartWidget } from './components/CartWidget/CartWidget';
import { CartContextComponent} from './context/CartContext'



function App() {

  return (
    
    <CartContextComponent>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <div className="App-div">
            <h1 className="bienvenidos">Bienvenidos!</h1>
            <Route exact path='/' component={ItemListContainer} />
            <Route exact path='/category/:categoryId' component={ItemListContainer} />
            <Route exact path='/item/:productId' component={ItemDetailContainer} />
            <Route exact path='/cart' component={CartWidget} />
          </div>
        </Switch>
      </BrowserRouter>
    </CartContextComponent>
  );
}

export default App;
