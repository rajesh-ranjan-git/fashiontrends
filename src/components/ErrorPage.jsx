import React from "react";
import Navbar from "../components/navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-between px-10 pt-20">
        <div className="m-2">
          <img src="images/empty-bag.webp" alt="404 - Page not found" />
        </div>
        <div className="m-2 font-bold text-pink-500 text-8xl">404</div>
        <div className="m-2 text-4xl font-semibold">Page not Found</div>
        <div className="m-2 text-2xl">
          Oops! You were not supposed to be here.
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
