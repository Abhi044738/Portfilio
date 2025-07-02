export const Home = () => {
  return (
    <>
      <div className="bg-[#4ECDC4] p-4">
        <div className="flex justify-center items-center w-10 h-10 bg-[#FFFFFF] rounded-lg font-bold shadow-md ">
          <p className="text-[#4ECDC4]">AU</p>
        </div>
      </div>
      <div className="m-4">
        <h1 className="mb-4  text-9xl leading-none">Abhinav Uniyal</h1>
        <h1 className="">Full stack Developer</h1>
      </div>
      <div className=" p-8  my-8 mx-4 h-128 rounded-md flex justify-center items-center gap-x-12   ">
        <div className="bg-[#788BFF] w-64 h-64 border-2  rounded-xl">
          <p>
            Open to job opportunities worldwide. Passionate about building
            polished,intuitive,and thoughtful digital experiences that
            leaveamark.
          </p>
        </div>
        <div className="bg-[#788BFF]"></div>
        <div className="bg-[#788BFF]">
          <p>AVAILABLE FOR WORK </p>
          <h3>August 2025</h3>
          <button>Contact me </button>
        </div>
      </div>
    </>
  );
};
