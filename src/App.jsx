import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Navbar } from "./Component/Navbar";
import { useRef } from "react";
import { HeaderComponent } from "./Component/Header";
import { FooterComponent } from "./Component/Footer";
import { useAnimation } from "motion/react";

function App() {
  const pageRefference = useRef(null);
  const control = useAnimation();
  const controlBorder = useAnimation();
  console.log("dds" + control);
  return (
    <div className="  ">
      <HeaderComponent
        pageRefference={pageRefference}
        animationControl={control}
        controlBorder={controlBorder}
      />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>

      <Navbar
        pageRefference={pageRefference}
        animationControl={control}
        controlBorder={controlBorder}
      />
      <FooterComponent />
    </div>
  );
}

export default App;
