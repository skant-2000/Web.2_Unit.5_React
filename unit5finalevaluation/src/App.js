import './App.css';
import Homepage from './component/Homepage';
import {Routes,Route} from "react-router-dom"
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
