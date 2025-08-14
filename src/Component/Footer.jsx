import copyRight from "../assets/copyRight.png";
export const FooterComponent = () => {
  return (
    <>
      <footer className="bg-[#4ECDC4] font-bold h-[12rem] p-[2rem]">
        <p>
          <img
            className="w-4  inline"
            src={copyRight}
            alt="copy right symbol"
          />
          2025 Abhinav Uniyal. All rights reserved.
        </p>
        <p>
          About this Webbsite: Technology used React, Tailwind, Framer Motion.
        </p>
        <p></p>
      </footer>
    </>
  );
};
