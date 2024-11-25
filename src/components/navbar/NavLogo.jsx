import React from "react";
import { useNavigate } from "react-router";

const NavLogo = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };

  return (
    <div className="flex h-full p-4 w-36">
      <img
        className="h-auto cursor-pointer"
        src="images/myntra_logo.webp"
        alt="shoppershub_logo"
        onClick={handleHomePage}
      />
    </div>
  );
};

export default NavLogo;
