import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import About from './components/About'
import Home from './components/Home'
import Cloth from './components/Cloth';
import Watch from './components/Watch';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='cloth' element={<Cloth />} />
            <Route path='watch' element={<Watch />} />
            <Route path='about' element={<About />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='contactus' element={<ContactUs />} />
        </Routes>
    </div>
  );
}

export default App;
