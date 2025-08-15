import userImage from "../assets/userImg.jpg";
import { motion } from "motion/react";
export const Home = () => {
  return (
    <>
      <div className="m-4">
        <div id="border"></div>
        <div className="mt-10">
          <img
            className="rounded-[32rem] w-[12rem] m-auto "
            src={userImage}
            alt="Abhinav-img"
          />
        </div>
        <h1 className="mb-4  text-8xl leading-none">Hi,I'm Abhinav Uniyal</h1>
        <h1>Full stack Developer</h1>
        <div className="m-auto  mt-[1.5rem] space-x-1.5 ">
          <motion.button
            className="bg-[#1B9AAA]"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            Content Me
          </motion.button>
          <motion.button
            className="border-[#E07A5F]"
            whileHover={{ backgroundColor: "#E07A5F" }}
          >
            Download Resume
          </motion.button>
          <motion.button className="border-[#CFBFF7]">LinkedIn</motion.button>
          <motion.button>Github</motion.button>
        </div>
        <hr className=" w-[50rem] m-auto mt-25 mb-25" />
        <div className=" w-[50rem] m-auto ">
          <section className="">
            <h1>About Me </h1>
            <h3>
              I'm Abhinav Uniyal, a Passionate about building
              polished,intuitive,and thoughtful digital experiences that leave a
              mark.
            </h3>
            <h3>
              I specialize in building scalable, secure, and user-friendly web
              applications using React,Node , TailWind , Framer motion.
            </h3>
            <h3>
              I am actively seeking a full-time software developer role where I
              can continue to grow professionally and contribute meaningfully to
              innovative and impactful projects.
            </h3>
          </section>
          <hr className="w-[50rem] m-auto mt-25 mb-25" />
          <section>
            <h1>Skills</h1>
            <p>
              HTML5, CSS3, JAVASCRIPT, REACT, RESTFUL APIs, GIT&GITHUB, NETLIFY,
              NODEJS,EXPRESSJS, TAILWIND CSS.
            </p>
          </section>
          <hr className=" w-[50rem] m-auto mt-25 mb-25" />
        </div>
      </div>
    </>
  );
};
