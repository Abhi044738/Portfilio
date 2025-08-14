import { motion } from "motion/react";
export const HeaderComponent = ({ pageRefference, animationControl }) => {
  console.log("aniamte", animationControl);
  return (
    <>
      <motion.div
        animate={animationControl}
        id="header"
        ref={pageRefference}
        className="bg-[#4ECDC4] p-6 m-0"
      >
        <div className="flex justify-center items-center w-12 h-12 bg-[#FFFFFF] rounded-lg font-bold shadow-md ">
          <p className="text-[#4ECDC4] text-[60px]">AU</p>
        </div>
      </motion.div>
    </>
  );
};
