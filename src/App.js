import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingscreen from "./components/Landingscreen";
import Rockets from "./components/Rockets";
import Launch from "./components/Launch";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingscreen />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/launches" element={<Launch />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
