import React from "react";
import { useNavigate } from "react-router";

const NavLogo = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex h-full w-36">
      <img
        className="w-20 h-auto cursor-pointer"
        src="images/myntra_logo.webp"
        alt="shoppershub_logo"
        onClick={handleHomePage}
      />
    </div>
  );
};

export default NavLogo;
