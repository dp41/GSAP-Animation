import { useGSAP } from "@gsap/react";
import { darkYellowJarImg, greenJarImg, lightYellowJarImg } from "../utils";
import gsap from "gsap";

const Background = () => {
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.03,
    repeatRefresh: true,
  });

  useGSAP(() => {
    tl.fromTo("#mix", { opacity: 0 }, { opacity: 1 }, "+=0.05");
    tl.fromTo(
      "#mixImg",
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        opacity: 0,
      },
      { clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", opacity: 1 }
    );
    tl.fromTo(
      "#bg1",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      },
      "+=1"
    );

    tl.fromTo("#sweet", { opacity: 0 }, { opacity: 1 }, "+=0.05");
    tl.fromTo(
      "#sweetImg",
      { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1 }
    );
    tl.fromTo(
      "#bg2",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      "+=1"
    );
    tl.fromTo("#sour", { opacity: 0 }, { opacity: 1 }, "+=0.05");
    tl.fromTo(
      "#sourImg",
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        opacity: 0,
      },
      { clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", opacity: 1 }
    );

    tl.play();
  });
  return (
    <main className="flex w-full h-full relative overflow-auto snap-x snap-mandatory">
      <section className="snap-always snap-center relative">
        <div
          id="bg1"
          className="h-full w-screen flex-center bg-lightOrange absolute"
          style={{
            zIndex: 2,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <h1 id="mix" className="font-bold text-8xl opacity-1">
            Mix Mango Pickle
          </h1>
          <div
            id="mixImg"
            style={{
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            }}
            className="absolute"
          >
            <img src={lightYellowJarImg} width={850} height={850} />
          </div>
        </div>
        <div
          id="bg2"
          className="h-full w-screen flex-center bg-lightYellow absolute"
          style={{
            zIndex: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <h1 id="sweet" className="font-bold text-8xl opacity-1">
            Sweet Mango Pickle
          </h1>
          <div
            id="sweetImg"
            style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
            className="absolute"
          >
            <img src={darkYellowJarImg} width={850} height={850} />
          </div>
        </div>
        <div
          className="h-full w-screen flex-center bg-green absolute "
          style={{
            zIndex: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <h1 id="sour" className="font-bold text-8xl opacity-1">
            Sour Mango Pickle
          </h1>
          <div
            id="sourImg"
            style={{
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            }}
            className="absolute"
          >
            <img src={greenJarImg} width={850} height={850} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Background;
