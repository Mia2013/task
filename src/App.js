import "./App.css";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "./pages/Home";
import Content from "./pages/Content";
import BasicNavbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BasicNavbar />
      <Container className="wrapper">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="content" element={<Content />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
