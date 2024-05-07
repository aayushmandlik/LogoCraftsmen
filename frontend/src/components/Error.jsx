import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { CirDesign404 } from "../assets";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="m-3 sm:m-10 border-2 border-violet-400 bg-violet-100 rounded-[20px]">
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div>
          <h2 className={styles.sectionSubText}>Upppseyy!!! </h2>
          <h1 className={`${styles.sectionHeadText} flex justify-between`}>
            Wrong Place.
          </h1>

          <div className="container ">
            <p className="mt-4 text-center text-semibold font-sans text-xl ">
              Its Looks like You've have been lost.
            </p>
            <div className="flex flex-row justify-center items-center">
              <p className=" text-center text-bold font-bold text-[120px]">4</p>
              <img
                loading="lazy"
                src={CirDesign404}
                alt="Circle Design"
                title="Circle Design"
                className="w-[120px] h-[120px]"
              />
              <p className=" text-center text-bold font-bold text-[120px]">4</p>
            </div>
            <p className="text-center text-xl">
              Maybe you want to head back to our main page to find the place you
              are looking for
            </p>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <button className="flex justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ">
                Take me Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Error;
