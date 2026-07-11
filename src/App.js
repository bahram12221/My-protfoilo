import './App.css';
import Home from './Home/home';
import { Route, Routes } from "react-router-dom"
import Skills from './pages/skills/skills';
import { BrowserRouter } from 'react-router-dom';
import Works from './pages/works/works';
import Service from './pages/service/service';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div>
        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/works" element={<Works />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
