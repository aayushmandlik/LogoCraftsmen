import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constents";
import { hamburg, closee, craftsmen } from "../assets";

const Navbar = ({ setIsUploadOpen }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const dropdownTimeoutRef = useRef(null);

  const handleLinkClick = (title) => {
    setActive((prev) => (prev === title ? null : title));
  };

  const handleMouseEnter = (title) => {
    clearTimeout(dropdownTimeoutRef.current);
    setActive(title);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      const viewportWidth = window.innerWidth;

      setHasScrolled(
        viewportWidth >= 768 ? scrollDistance >= 75 : scrollDistance >= 50
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex justify-between items-center fixed top-0 z-10 bg-white w-full ${
          hasScrolled && "bg-white shadow-lg "
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            loading="lazy"
            src={craftsmen}
            alt="logo"
            title="logo"
            className="ml-auto sm:ml-2 md:ml-10 lg:ml-10 w-42 h-24 object-contain "
          />
        </Link>

        <ul
          className="list-none lg:flex flex-row gap-10 mr-10 hidden "
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {navLinks.map((link) => (
            <li
              key={link.id || link.title}
              className={`relative ${
                active === link.title ? "text-black" : "text-neutral-500"
              } text-[18px] font-medium cursor-pointer sm:mb-2`}
              onMouseEnter={() => handleMouseEnter(link.title)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                onClick={() => handleLinkClick(link.title)}
                className="cursor-pointer"
              >
                {link.id === "upload" ? (
                  <span
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[50px]"
                    onClick={() => setIsUploadOpen(true)}
                  >
                    {link.title}
                  </span>
                ) : link.title === "Services" ? (
                  <span>{link.title}</span>
                ) : (
                  <Link to={`/${link.id}`}>{link.title}</Link>
                )}
              </div>
              {link.sublinks && active === link.title && (
                <div className="absolute top-full left-0 mt-[-10px] bg-white p-2 space-y-2 shadow w-72 rounded-[5px] sm:mt-10 sm:block">
                  {link.sublinks.map((sublink) => (
                    <Link
                      key={sublink.link}
                      to={sublink.link}
                      className="block px-4 py-2 text-neutral-500 border-b hover:text-black  hover:ml-1"
                      onClick={() => handleLinkClick(sublink.link)}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center ">
          <img
            loading="lazy"
            src={toggle ? closee : hamburg}
            alt="hamburg"
            title="hamburg"
            className="w-[28px] h-[28px] object-contain cursor-pointer mr-4"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute w-full h-fit top-0 left-0 mt-24 bg-gray-50 pb-3 
              z-10 flex items-center justify-around transition-transform duration-300 ease-in-out transform`}
          >
            <ul
              className="list-none flex justify-end items-center flex-col gap-4"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <li className="text-black text-[16px] font-bold cursor-not-allowed  border-b-2 pb-1">
                Services:
              </li>

              {navLinks
                .find((link) => link.title === "Services")
                ?.sublinks.map((sublink) => (
                  <li
                    key={sublink.link}
                    className="text-black text-[16px] font-medium cursor-not-allowed "
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    <Link to={sublink.link}>{sublink.name}</Link>
                  </li>
                ))}

              {navLinks
                .filter((link) => link.title !== "Services")
                .map((link) => (
                  <li
                    key={link.id}
                    className="hover:text-black text-[16px] font-bold cursor-pointer border-b-2 pb-2"
                    onClick={() => {
                      if (link.sublinks) {
                        setToggle(!toggle);
                        setActive(link.title);
                      } else {
                        setToggle(false);
                      }
                    }}
                  >
                    {link.id === "upload" ? (
                      <span className="" onClick={() => setIsUploadOpen(true)}>
                        {link.title}
                      </span>
                    ) : (
                      <Link to={`/${link.id}`}>{link.title}</Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
