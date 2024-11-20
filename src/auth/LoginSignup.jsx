import React from "react";

const LoginSignup = () => {
  return (
    <main className="flex items-center justify-center h-screen px-10 pt-20 bg-pink-100">
      <div className="flex flex-col items-center justify-center pt-10 pb-16 bg-white rounded-sm w-96">
        <h1 className="my-4 text-2xl font-bold">
          Login <span className="text-xl">or</span> Signup
        </h1>
        <form className="my-4" action="">
          <input
            className="w-full p-2 my-4 border rounded-sm outline-none"
            type="email"
            placeholder="Enter email..."
          />
          <button className="w-full p-2 font-semibold text-white bg-pink-600 border border-pink-600 rounded-sm hover:bg-white hover:text-pink-600">
            CONTINUE
          </button>
        </form>
        <div className="text-sm ">
          Having trouble logging in?{" "}
          <span className="font-semibold text-pink-600">
            <a href="">Get help</a>
          </span>
        </div>
      </div>
    </main>
  );
};

export default LoginSignup;
