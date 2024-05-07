import React from "react";
import { Link } from "react-router-dom";

const Itemsfooter = ({ Links, title }) => {
  return (
    <div className="flex justify-center">
      <ul>
        <div className="mb-1 font-semibold underline underline-offset-8 text-center">
          {title}
        </div>
        {Links.map((link) => (
          <li key={link.name}>
            <Link
              className="text-gray-400 hover:text-teal-400 duration-300 flex justify-center items-center "
              to={link.link}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itemsfooter;
