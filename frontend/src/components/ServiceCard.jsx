import React from "react";
import { Link, useLocation } from "react-router-dom";

import Vector from "../assets/vectorcow.jpg";
import Tiger from "../assets/tiger.jpg";
import Art from "../assets/art1.jpg";
import Order from "../assets/order.jpg";
import ImageEdit from "../assets/imgedit1.jpeg";

// Your component definition
function ContentWrapper({ path, imageSrc, title, description }) {
  const backgroundStyle = {
    backgroundImage: `url(${imageSrc})`,
  };
  return (
    <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px] w-72 h-96">
      <Link
        to={path}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: Add smooth scrolling behavior
          });
        }}
      >
        <div
          style={backgroundStyle}
          className={`mx-auto w-full h-full justify-center bg-no-repeat bg-cover bg-center rounded-[20px]`}
        >
          <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px] flex items-end justify-center pb-7">
            <div className="font-semibold text-xl flex justify-center mb-5">
              {title}
            </div>

            <p className="m-2">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function YourComponent() {
  const location = useLocation();
  const currentPath = location.pathname;

  const services = [
    {
      path: "/vector",
      imageSrc: Vector,
      title: "Vector Conversion",
    },
    {
      path: "/embroidery",
      imageSrc: Tiger,
      title: "Embroidery Digitizing",
    },
    {
      path: "/artvisuals",
      imageSrc: Art,
      title: "Art / Virtual Proofs",
    },
    {
      path: "/orderentry",
      imageSrc: Order,
      title: "Order Entry Management",
    },
    {
      path: "/imageedit",
      imageSrc: ImageEdit,
      title: "Image Editing",
    },
  ];

  return (
    <div className="relative bg-gray-100">
      <div>
        <h1 className="flex justify-center font-semibold text-2xl pt-5">
          Explore More Services
        </h1>
      </div>
      <div className="flex bg-gray-100 px-10 py-10 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {services.map((service) => {
            // Conditionally exclude the current path from the grid
            if (currentPath === service.path) {
              return null;
            }

            return (
              <ContentWrapper
                key={service.path}
                path={service.path}
                imageSrc={service.imageSrc}
                title={service.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
