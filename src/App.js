import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Projects from './components/Projects';



function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
