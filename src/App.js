import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Service from './routes/Service';




function App() {
  return (

    <div className="App">  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AbouT/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>



      
    </Routes>
    
      
      
    </div>
  );
}

export default App;
