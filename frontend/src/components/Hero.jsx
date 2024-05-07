import React, { useState, useEffect, useRef } from "react";

import { hero_emb, hero_vector, hero_imgedits, hero_mockup } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const AnimatedDiv = ({ children }) => {
  const targetRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const animationClass = inView ? "animate" : "";

  return (
    <div
      ref={targetRef}
      className={`animated-div ${animationClass} flex justify-center items-center gap-6 py-10 flex-col  `}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className="w-full h-fit"
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
    >
      <SwiperSlide className="w-screen swiper_main">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              loading="lazy"
              src={hero_emb}
              alt="Hero Embroidery"
              className="lg:w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-50 rounded-[20px] text-center ">
              <AnimatedDiv>
                <h2 className="lg:text-[65px] font-bold text-black font-playfair text-[40px] px-5">
                  Embroidery{" "}
                  <span className="text-blue-800 lg:text-[65px] font-bold font-playfair">
                    Design
                  </span>{" "}
                  Excellence!
                </h2>
                <h2 className="lg:text-[45px] font-semibold font-playfair text-[30px] px-5">
                  From Logos to Apparel –
                  <span className="text-rose-900  lg:text-[45px] font-playfair text-[30px]">
                    Stitched Brilliance.
                  </span>
                </h2>
                <h2 className="lg:text-[45px] font-playfair text-[30px] lg:mt-0 mt-10">
                  Price:{" "}
                  <span className="lg:text-[120px] font-semibold text-yellow-900 font-playfair text-[50px]">
                    $1
                  </span>
                  <span className="lg:text-[55px] font-semibold font-playfair">
                    / 1000
                  </span>
                  <span className="lg:text-[45px] text-black font-playfair text-[30px]">
                    {" "}
                    stitches
                  </span>
                </h2>
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute md-bottom-16 lg:-bottom-5 -bottom-5"
                  to="/embroidery"
                >
                  Learn More
                </Link>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-screen">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              loading="lazy"
              src={hero_vector}
              alt="Hero Vector"
              className="w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px]  ">
              <AnimatedDiv>
                <h2 className="lg:text-[65px] font-bold text-black font-playfair text-[40px] px-5  text-center">
                  Transform{" "}
                  <span className="text-pink-800 lg:text-[65px] text-[40px] font-bold font-playfair">
                    Raster{" "}
                  </span>
                  <span className="lg:text-[65px] font-bold font-playfair text-[40px]">
                    to{" "}
                  </span>
                  <span className=" lg:text-emerald-700 lg:text-[65px] font-playfair text-[40px] text-orange-900">
                    Vector
                  </span>{" "}
                  Magic!
                </h2>
                <h2 className="lg:text-[45px] font-semibold font-playfair text-[30px] lg:ml-0 ml-14">
                  Elevate{" "}
                  <span className="text-blue-800 lg:text-[45px] font-playfair">
                    Designs
                  </span>{" "}
                  with Precision Vectors.
                </h2>

                <h2 className="lg:text-[50px] font-semibold font-playfair text-[25px]">
                  Price Starting from{" "}
                  <span className="lg:text-[80px] font-bold font-playfair text-[40px] text-yellow-900">
                    $1.99
                  </span>
                </h2>
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute lg:-bottom-20 -bottom-20 md:-bottom-32"
                  to="/vector"
                >
                  Learn More
                </Link>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-screen">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              loading="lazy"
              src={hero_mockup}
              alt="Hero Mockup"
              className="lg:w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
              <AnimatedDiv>
                <h2 className="lg:text-[65px] font-bold text-black  font-playfair text-[40px]">
                  Virtual Mockup
                </h2>
                <h2 className="lg:text-[45px] font-semibold  lg:px-20 font-playfair text-[30px]">
                  See Your{" "}
                  <span className=" lg:text-[45px] text-amber-700 font-playfair text-[30px]">
                    Brand
                  </span>{" "}
                  Shine!
                </h2>
                <h2 className="lg:text-[35px] font-semibold  lg:px-20 font-playfair text-[20px] text-center ">
                  Our Promotional Products Mockup Service Lets You Preview{" "}
                  <span className=" text-red-700 lg:text-[35px] font-playfair">
                    Impact.
                  </span>
                </h2>
                <h2 className="lg:text-[40px] font-semibold  lg:px-20 font-playfair text-[20px] text-center px-3">
                  From Pens to Apparel – Virtually Perfect Before Production.
                </h2>
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute lg:-bottom-16 -bottom-24"
                  to="/artvisuals"
                >
                  Learn More
                </Link>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="w-screen">
        <div className="relative">
          <div className="flex items-center justify-center ">
            <img
              loading="lazy"
              src={hero_imgedits}
              alt="Hero Image Edit"
              className="lg:w-full lg:h-[600px] rounded-[20px] mx-10 my-4 h-[500px]"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-[20px] ">
              <AnimatedDiv>
                <h2 className="lg:text-[65px] font-bold text-black  font-playfair text-[40px] text-center">
                  Image <br className="sm:hidden" />
                  Editing <br className="sm:hidden" />
                  Excellence !
                </h2>
                <h2 className="lg:text-[55px] font-semibold lg:px-20 font-playfair text-[30px]">
                  <span className="lg:text-[55px]  text-rose-700 font-playfair">
                    Visual
                  </span>{" "}
                  Brilliance Begins!
                </h2>
                <h2 className="lg:text-[50px] font-semibold lg:px-20 font-playfair  text-[30px] text-center">
                  <span className=" text-violet-900 font-playfair">
                    Perfect
                  </span>{" "}
                  your{" "}
                  <span className=" text-violet-900 font-playfair">Images</span>{" "}
                  with{" "}
                  <span className=" text-violet-900 font-playfair">
                    Precision
                  </span>
                  .
                </h2>
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute lg:-bottom-28 -bottom-8 md:-bottom-36"
                  to="/imageedit"
                >
                  Learn More
                </Link>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default Hero;
