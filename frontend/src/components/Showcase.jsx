import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { icecream, embdragonshow, imgedit1, CirDesign } from "../assets";
import { SchoolLogo, ClubLogo } from "../assets";

const images = [
  icecream,
  ClubLogo,
  SchoolLogo,
  imgedit1,
  CirDesign,
  embdragonshow,
];

const Showcase = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = (direction) => {
    const newIndex =
      (selectedImageIndex + direction + images.length) % images.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <div className="relative m-3 sm:m-10 bg-pink-200 rounded-[20px]">
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div>
          <section className="container mx-auto">
            <h2 className={styles.sectionSubText}>Tour to the Logos </h2>
            <h2 className={styles.sectionHeadText}>Showcases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative items-center justify-center overflow-hidden cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="mx-auto max-w-4xl">
                    <img
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                      src={image}
                      alt="Showcase"
                      title="Showcase"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[352px] bg-gradient-to-t from-white to-transparent">
              <div className="flex h-full items-end justify-center">
                <Link
                  to="/portfolio"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    There's More to Explore
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: "20px",
            padding: "0",
          },
        }}
      >
        <motion.img
          src={images[selectedImageIndex]}
          alt="Modal Image"
          className="lg:w-[500px] lg:h-[500px] w-[350px] h-[350px] object-contain rounded-xl"
          onClick={closeModal}
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-0 opacity-70 hover:opacity-100 left-0 m-4 text-white text-6xl cursor-pointer bg-sky-500 rounded-full p-2 z-100 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute bottom-0 opacity-80 hover:opacity-100 right-0 m-4 text-white text-6xl cursor-pointer bg-sky-500 rounded-full p-2 z-100 transform -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </Modal>
    </div>
  );
};

export default Showcase;
