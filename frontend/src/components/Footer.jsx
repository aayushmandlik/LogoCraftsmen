import React from "react";
import Itemscontainerfooter from "./Itemscontainerfooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Itemscontainerfooter />
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 ">
        <span>© 2024 Apply.All rights reserved.</span>
        <span>
          {" "}
          <Link
            to="/terms"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="hover:text-teal-400"
          >
            Terms
          </Link>{" "}
          .{" "}
          <Link
            to="/privacy"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="hover:text-teal-400"
          >
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
