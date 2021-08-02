import './App.css';
import { React } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { HomeContainer } from './components/HomeContainer/HomeContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartContextComponent} from './context/CartContext'
import { CartComponent } from './components/CartComponent/CartComponent'





function App() {

  return (
    
    <CartContextComponent>
      <BrowserRouter>
        <NavBar/>
          <div className="App-div">
        <Switch>
            <Route exact path='/' component={HomeContainer} />
        </Switch>
        <Switch>
            <Route exact path='/allItems' component={ItemListContainer} />
        </Switch>
        <Switch>
            <Route exact path='/category/:category' component={ItemListContainer} />
        </Switch>
        <Switch>
            <Route exact path='/item/:id' component={ItemDetailContainer} />
        </Switch>
        <Switch>
            <Route exact path='/cart' component={CartComponent}/>
        </Switch>
          </div>
      </BrowserRouter>
    </CartContextComponent>
  );
}

export default App;
