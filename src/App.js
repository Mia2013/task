import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
