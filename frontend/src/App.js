import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import InsertProduct from './components/InsertProduct'
import UpdateProduct from './components/UpdateProduct';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar title="Home" about="About"></Navbar>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insertproduct" element={<InsertProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
