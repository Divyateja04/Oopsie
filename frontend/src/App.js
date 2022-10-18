import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Navbar from './Components/Navbar';
import Shopping from './Pages/Shopping';
import Cart from './Pages/Cart';
import Wallet from './Pages/Wallet';
import Inventory from './Pages/Inventory';

import data from './data/data'

function App() {
  return (
    <Router>
      <div className='justify-center items-center text-center align-middle bg-gray-300'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shopping" element={<Shopping data={data} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
