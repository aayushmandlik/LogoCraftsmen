import {
  monkey,
  tiger02,
  owl,
  peacock,
  embskull1,
  icecream,
  vectorcow,
  embdragonport,
  CirDesignshow,
  ClubLogoshow,
  SchoolLogoshow,
  imgedit1,
  imgedit3,
  imgedit4,
  imgedit5,
  imgedit6,
  imgedit7,
} from "../assets";
import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Helmet } from "react-helmet";

const images = [
  monkey,
  owl,
  vectorcow,
  peacock,
  icecream,
  CirDesignshow,
  ClubLogoshow,
  SchoolLogoshow,
  tiger02,
  embskull1,
  embdragonport,
  imgedit6,
  imgedit3,
  imgedit5,
  imgedit4,
  imgedit7,
  imgedit1,
];

const Portfolio = () => {
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

  const vectorImages = images.slice(0, 5);

  return (
    <div>
      <Helmet>
        <title>Portfolio | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Dive into the diverse showcase of Logo Craftsmen's portfolio, featuring an array of captivating vector art, intricate embroidery designs, and stunning image editing services. Witness the precision and creativity that define our work. Click on each image to enlarge and appreciate the craftsmanship behind every design. Discover the artistry that sets Logo Craftsmen apart in logo design, vector conversion, embroidery, and image editing services."
        />
        <meta
          name="keywords"
          content="Logo Craftsmen portfolio, vector art, embroidery designs, image editing, graphic design, creative illustrations, precision craftsmanship, professional design services, digital art, logo showcase, artistic creations, design diversity, creative exploration, visual storytelling, intricate embroidery, vector conversion, image enhancement, design precision"
        />
        <link rel="canonical" href="https://logocraftsmen.com/portfolio" />
      </Helmet>
      <div className="relative m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <h2 className={styles.sectionSubText}>Tour to the Logos </h2>
              <h1 className={styles.sectionHeadText}>Showcases.</h1>
              <p className="font-lobster text-5xl mt-16 flex justify-center underline">
                Our Vector Art
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
                {vectorImages.map((image, index) => (
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
                        alt="Portfolio"
                        title="Portfolio"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-lobster text-5xl mt-16 flex justify-center underline">
                Our Embroidery Designs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
                {images.slice(5, 11).map((image, index) => (
                  <div
                    key={index}
                    className="group relative items-center justify-center overflow-hidden cursor-pointer"
                    onClick={() => openModal(index + 5)}
                  >
                    <div className="mx-auto max-w-4xl">
                      <img
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                        src={image}
                        alt="Portfolio"
                        title="Portfolio"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-lobster text-5xl mt-16 flex justify-center underline">
                Our Image Editing Service
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
                {images.slice(11).map((image, index) => (
                  <div
                    key={index}
                    className="group relative items-center justify-center overflow-hidden cursor-pointer"
                    onClick={() => openModal(index + 11)}
                  >
                    <div className="mx-auto max-w-4xl">
                      <img
                        loading="lazy"
                        className="bg-orange-200 h-full w-full object-cover group-hover:scale-125 transition-transform duration-500 rounded-xl"
                        src={image}
                        alt="Portfolio"
                        title="Portfolio"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
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
          className="lg:w-[500px] lg:h-[500px] w-[350px] h-[350] object-contain rounded-xl"
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

export default Portfolio;
