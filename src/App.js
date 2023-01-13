import { useId } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BasicNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import { pages } from "./components/pages";

function App() {
  const id = useId();

  return (
    <div className="App">
      <BasicNavbar pages={pages} />
      <div className="wrapper">
        <Routes>
          {pages.map((page) => (
            <Route key={id} path={page.path} element={page.element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
