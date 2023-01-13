import "./App.css";
import { Routes, Route } from "react-router-dom";
import BasicNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import { pages } from "./components/pages";

function App() {
  return (
    <div className="App">
      <BasicNavbar pages={pages} />
      <div className="wrapper">
        <Routes>
          {
            pages.map(page =>(
              <Route path={page.path} element={page.element} />
            ))
          }
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
