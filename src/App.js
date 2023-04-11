import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Home" element={<Homepage />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
