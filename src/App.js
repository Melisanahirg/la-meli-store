// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
const saludo = {name:'Bienvenidos!'};
  return (
    <div className="App-div">
      <NavBar/>
      
      <ItemListContainer productData={saludo} />
    </div>
  );
}

export default App;
