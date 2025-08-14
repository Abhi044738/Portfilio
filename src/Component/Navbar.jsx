import homeIcon from "../assets/home.png";
import projectIcon from "../assets/project.png";
import aboutIcon from "../assets/about.png";
import { useState } from "react";
import { motion, AnimatePresence, scale } from "motion/react";
import { useNavigate } from "react-router-dom";
import { animate } from "motion";

const icons = [
  { name: "home", path: homeIcon },
  { name: "project", path: projectIcon },
  { name: "about", path: aboutIcon },
];
const options = {
  root: null, //goes to browser viewPort.
  rootMargin: "0px",
  threshold: 1.0, ///visibility 0-1 =>1 to 100%
};
const animtionCallBack = async (entries, observer, animationControl) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      await animationControl.start({
        backgroundColor: ["#4ECDC4", "#ffffff", "#4ECDC4"],
        y: ["0.5rem", "0rem"],
        scale: [0.7, 1],
        transition: {
          backgroundColor: {
            duration: 1,
            ease: "easeOut",
            repeat: 3,
            repeatType: "loop",
          },
          y: {
            duration: 2,
            ease: "easeOut",
          },
          scale: {
            duration: 2,
            ease: "easeOut",
          },
        },
      });
    }
  }
  observer.disconnect();
};

const tabAnimationHandler = (pageRefference, animationControl) => {
  pageRefference.current?.scrollIntoView({ behavior: "smooth" });
  const observer = new IntersectionObserver(
    (entries, observer) =>
      animtionCallBack(entries, observer, animationControl),
    options
  );
  observer.observe(pageRefference.current);
};
export const Navbar = ({ pageRefference, animationControl }) => {
  const navigate = useNavigate();
  const handDragEnd = (value, event, info) => {
    const { x, y } = info.point;
    console.log(info);

    const dropTarget = document.elementFromPoint(x, y);
    if (pageRefference.current.contains(dropTarget)) {
      switch (value) {
        case "home":
          navigate("/");
          break;
        case "project":
          navigate("/project");
          break;
        case "about":
          navigate("/");
          break;
        default:
          break;
      }
    }
  };

  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
    setTimeout(() => setHover(false), 2000);
  };
  return (
    <div className="fixed bottom-8 m-auto p-auto transform -translate-x-1/2  left-1/2">
      <div className="relative ">
        <AnimatePresence>
          {hover ? (
            <motion.p
              animate={{ scale: [0, 1], opacity: [0, 1] }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                delay: 0.3,
                ease: "easeInOut",
              }}
            >
              drag and drop the icon
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
      <div
        onMouseEnter={handleHover}
        className="flex  justify-evenly items-center    min-w-2xs min-h-16 border-2 border-solid rounded-4xl bg-white shadow-xl/25  shadow-white"
      >
        {icons.map(({ name, path }, index) => (
          <motion.img
            key={name}
            whileTap={() =>
              tabAnimationHandler(pageRefference, animationControl)
            }
            drag
            dragSnapToOrigin
            whileDrag={{ scale: 0.8 }}
            onDragEnd={(event, info) => handDragEnd(name, event, info)}
            whileHover={{ y: [0, -5, 0] }}
            className="block w-10 h-10 object-contain"
            src={path}
            alt={name}
          />
        ))}
      </div>
    </div>
  );
};
