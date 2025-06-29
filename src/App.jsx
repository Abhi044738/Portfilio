import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import homeIcon from "./assets/home.png";
import projectIcon from "./assets/project.png";
import aboutIcon from "./assets/about.png";

function App() {
  return (
    <div className=" h-200 w-200 border-2 border-soild">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <div className="flex  justify-evenly items-center  fixed bottom-8 left-1/2 transform -translate-x-1/2 min-w-2xs min-h-16 border-2 border-solid rounded-4xl bg-white shadow-xl/25  shadow-white">
        <img
          className="block w-10 h-10 object-contain"
          src={homeIcon}
          alt="home"
        />
        <img
          className="block w-10 h-10 object-contain"
          src={projectIcon}
          alt="home"
        />
        <img
          className="block w-10 h-10 object-contain"
          src={aboutIcon}
          alt="home"
        />
      </div>
    </div>
  );
}

export default App;
