import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [view, setView] = useState("");
  return (
    <div className="navbar">
      <Link
        to="/rockets"
        style={{
          textDecoration: view === "rockets" ? "underline" : "none",
          backgroundColor: view === "rockets" ? "#ddd" : "#333",
          color: view === "rockets" ? "black" : "white",
        }}
        onClick={() => setView("rockets")}
      >
        Rocket
      </Link>
      <Link
        to="/launches"
        style={{
          textDecoration: view === "launches" ? "underline" : "none",
          backgroundColor: view === "launches" ? "#ddd" : "#333",
          color: view === "launches" ? "black" : "white",
        }}
        onClick={() => setView("launches")}
      >
        Launches
      </Link>
      <Link
        to="/search"
        style={{
          textDecoration: view === "search" ? "underline" : "none",
          backgroundColor: view === "search" ? "#ddd" : "#333",
          color: view === "search" ? "black" : "white",
        }}
        onClick={() => setView("search")}
      >
        Search
      </Link>
    </div>
  );
};

export default Navbar;
