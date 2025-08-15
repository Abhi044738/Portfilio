import { motion } from "motion/react";
export const HeaderComponent = ({
  pageRefference,
  animationControl,
  controlBorder,
}) => {
  console.log("aniamte", animationControl);
  console.log("border aniamte", controlBorder);
  return (
    <>
      <motion.div
        animate={animationControl}
        id="header"
        ref={pageRefference}
        className=" p-[2px] relative z-10 bg-[#4ECDC4]"
      >
        <motion.div
          className="border-custom-class"
          animate={controlBorder}
          id="div-as-border"
        ></motion.div>
        <div className="relative rounded-[1rem] z-30 bg-[#4ECDC4] p-6 m-0">
          <div className="flex justify-center items-center w-12 h-12 bg-[#FFFFFF] rounded-lg font-bold shadow-md ">
            <p className="text-[#4ECDC4] text-[60px]">AU</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
