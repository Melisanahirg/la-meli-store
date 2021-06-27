// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'




function App() {


  return (
    <div className="App-div">
      <NavBar />
      <h1 className="bienvenidos">Bienvenidos!</h1>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
