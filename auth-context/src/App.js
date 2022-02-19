import './App.css';
import Login from './Component/Login';
import Navbar from "./Component/Navbar"
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';

function App() {

  const {showLogin} = useContext(AuthContext)

  return (
    <div className="App">
      {showLogin ? <Login /> : <Navbar />}
    </div>
  );
}

export default App;
