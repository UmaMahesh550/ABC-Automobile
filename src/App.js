import './App.css';
import Menu from './Components/Menu';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Counter from './Components/Counter';
import Vehicle from './Components/Vehicle';
import Service from './Components/Service';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>;
        <Route path="/about" element={<About/>}></Route>;
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path='/vehicle' element={<Vehicle/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;