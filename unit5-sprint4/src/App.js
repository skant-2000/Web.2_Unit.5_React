import './App.css';
import Home from './component/Home';
import {Route, Routes} from "react-router-dom"
import Pre from './component/Pre';
import Info from './component/Info';
import Register from './component/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='prerequsite' element={<Pre />}/>
        <Route path='info' element={<Info />}/>
        <Route path='register' element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
