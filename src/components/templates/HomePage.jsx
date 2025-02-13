"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

//Components
import SocialQR from "../modules/SocialQR";

//Images & Icons
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import logo from "../../../public/logo.jpg";

function HomePage() {
  const text = "“ما رو از طریق شبکه های اجتماعی دنبال کنید”";
  const splitText = text.split("").map((char, index) => (
    <span key={index} className="char">
      {char}
    </span>
  ));

  React.useEffect(() => {
    const animateChars = () => {
      const chars = document.querySelectorAll(".char");
      chars.forEach((char, index) => {
        setTimeout(() => {
          char.classList.add("animate");
        }, index * 100);
      });

      // Reset the animation after a certain duration
      const totalDuration = text.length * 100; // Duration for the animation
      setTimeout(() => {
        chars.forEach((char) => char.classList.remove("animate"));
        // Call animateChars again to loop the animation
        animateChars();
      }, totalDuration);
    };

    // Initiate the animation for the first time
    animateChars();
  }, [text]);

  return (
    <div
      className="flex flex-col w-full h-full justify-center items-start mb-auto
     font-normal text-white p-4 max-w-[768px] min-[500px]:text-lg"
    >
      <div
        className="flex justify-between items-center mb-auto w-full mt-5
      p-4 bg-white/5 rounded-lg"
      >
        <div className="flex flex-col justify-center items-start w-fit mt-0 mb-auto">
          <h1 className="flex items-center font-bold text-slate100">
            استودیو تخصصی مو | مهلا محتشم
          </h1>
          <p
            className="mt-1 font-light text-[11px] min-[385px]:text-[12px]
          p-1 rounded-md"
          >
            {splitText}
          </p>
        </div>
        <Image
          className="w-12 rounded-full shadow-forDark outline outline-1 mr-2
          outline-offset-1 outline-slate700 ring-1 ring-gray400 transition-all
          duration-500 hover:opacity-80 hover:scale-[0.97] min-[500px]:w-16"
          src={logo}
          width={400}
          height={400}
          alt="logo"
        />
      </div>
      <SocialQR />
      <span className="w-full flex flex-col justify-center items-center mt-5 bg-white/5 text-sm font-light rounded-lg p-4">
        <p>توسعه یافته توسط تیم برنامه نویسی کَن آی کُد &copy;</p>
        <Link
          className="mt-3 w-full text-sky400 text-center transition-all duration-500 font-bold
          hover:opacity-80"
          href="https://www.canicode.ir"
          target="_blank"
        >
          وبسایت کَن آی کُد
          <NavigateBeforeIcon fontSize="small" sx={{ mr: 0.3 }} />
        </Link>
      </span>
    </div>
  );
}

export default HomePage;
