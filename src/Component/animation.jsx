export const tabAnimationHandler = async (
  pageRefference,
  animationControl,
  controlBorder
) => {
  await handleScroll(pageRefference);
  await startAnimation(animationControl, controlBorder);
};

const handleScroll = (pageRefference) =>
  new Promise((resolve, reject) => {
    if (!pageRefference.current) {
      reject("Page Refference Error");
    }
    pageRefference.current?.scrollIntoView({ behavior: "smooth" });
    const giveScrollCondition = (pageRefference) => {
      const childObj = pageRefference.current.getBoundingClientRect();
      const result = childObj.top >= 0 && childObj.bottom <= window.innerHeight;
      return result;
    };

    const checkStatus = (pageRefference) => {
      setInterval(() => {
        if (!giveScrollCondition(pageRefference)) {
          checkStatus(pageRefference);
          return;
        }
        resolve();
      }, 500);
    };
    checkStatus(pageRefference);
  });

const startAnimation = async (animationControl, controlBorder) => {
  await animationControl.start({
    y: [null, "2rem", "0.5rem", "1rem"],
    scale: [0.96],
    borderRadius: ["1rem"],
    transition: {
      duration: 2,
      time: [0, 0.5, 0.6, 1],
    },
  });
  await controlBorder.start({
    backgroundImage: [
      "conic-gradient(from 0deg,#ff4545,#00ff99,#006aff,#ff0095,#ff4545)",
      "conic-gradient(from 360deg,#ff4545,#00ff99,#006aff,#ff0095,#ff4545)",
      "none",
    ],
    filter: [null, "blur(10px)", "blur(0px)"],
    transition: {
      duration: 1,
      time: [0, 0.3, 0.6, 1],
      repeat: 2,
    },
  });
  await animationControl.start({
    y: [null, "0rem"],
    scale: [null, 1],
    borderRadius: [null, 0],
    transition: {
      duration: 1,
      delay: 0.3,
      ease: "easeInOut",
    },
  });
  // await animationControl.start({
  //   backgroundColor: ["#4ECDC4", "#ffffff", "#4ECDC4"],
  //   scale: [0.7, 1],
  //   transition: {
  //     backgroundColor: {
  //       duration: 1,
  //       ease: "easeOut",
  //       repeat: 3,
  //       repeatType: "loop",
  //     },
  //     y: {
  //       duration: 2,
  //       ease: "easeOut",
  //     },
  //     scale: {
  //       duration: 2,
  //       ease: "easeOut",
  //     },
  //   },
  // });
};
