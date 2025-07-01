import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Navbar } from "./Component/Navbar";
import { useRef } from "react";

function App() {
  const pageRefference = useRef(null);

  return (
    <div className=" h-200 w-200 border-2 border-soild">
      <div className="border-red-200  border-2" ref={pageRefference}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>

      <Navbar pageRefference={pageRefference} />
    </div>
  );
}

export default App;
