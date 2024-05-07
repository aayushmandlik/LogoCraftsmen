import React, { useState } from "react";
import Peacock from "../assets/peacock.jpg";
import { vectorcow, ClubLogowhite, artblue } from "../assets";
import axios from "axios";
import { toast } from "react-toastify";
import { styles } from "../styles";
import { Helmet } from "react-helmet";

const Contact = ({ setIsUploadOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    service: "",
    ImageFile: [],
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, phone, message } = formData;

  const options = [
    { value: "Vector Conversion", label: "Vector Conversion" },
    { value: "Embroidery", label: "Embroidery" },
    { value: "Image editing", label: "Image editing" },
    { value: "Arts / visual proof", label: "Arts / visual proof" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const cleanedPhoneNumber = e.target.value.replace(/\D/g, "");
    setFormData((p) => ({
      ...p,
      phone: cleanedPhoneNumber,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !((phone.startsWith("91") && phone.length === 12) || phone.length === 10)
    ) {
      toast.error("Phone Number Not valid");
      return;
    }
    const serializedFormData = JSON.stringify(formData);
    const payloadSizeInBytes = new TextEncoder().encode(
      serializedFormData
    ).length;
    const maxTotalPayloadSize = 25 * 1024 * 1024;

    if (payloadSizeInBytes > maxTotalPayloadSize) {
      toast.error(
        "Payload Size is greater than 25mb. Try to reduce size of iamges."
      );
    }
    setLoading(true);
    const response = await axios.post(
      `https://backend-logocraftsmen.onrender.com/contactAdmin`,
      formData
    );
    setLoading(false);
    if (response.status === 200) {
      toast.success("Email sent successfully!");
      setIsUploadOpen(false);
    } else toast.error("Error occured while sending email");

    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
    });
  };

  const openMap = (address) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
      "_blank"
    );
  };

  return (
    <div>
      <Helmet>
        <title>Contact | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Contact Logo Craftsmen for professional logo design, vector conversion, and embroidery services. Connect with us using the provided phone number or email address.Use the contact form to send us a message. Explore our gallery featuring vector art, logo designs, and more. We look forward to helping you bring your design ideas to life!"
        />
        <meta
          name="keywords"
          content="contact Logo Craftsmen, logo design services, vector conversion, embroidery services, professional design services, contact information,name, phone number, email address,type a message,USA, India, design gallery, vector art, logo designs, design consultation, design ideas, logo craftsmanship"
        />
        <link rel="canonical" href="https://logocraftsmen.com/contact" />
      </Helmet>
      <div className="m-3 sm:m-10 pb-8 flex flex-col bg-fuchsia-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <h2 className={styles.sectionSubText}>Want a Conversation</h2>
          <h1 className={styles.sectionHeadText}>Contact us</h1>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mx-auto">
              <a
                href="tel:+859-181-3460"
                title="859-181-3460"
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-center gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <p className="font-semibold">859-181-3460</p>
                </div>
              </a>
              <a
                href="mailto:art@logocraftsmen.com"
                title="art@logocraftsmen.com"
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-center gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <p className="font-semibold">art@logocraftsmen.com</p>
                </div>
              </a>
              <a
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
                onClick={() =>
                  openMap("2423 Lyttonsville Rd, Silver Spring, MD 20910, USA")
                }
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-end pb-2 gap-3 items-center cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p className="font-semibold text-center">
                    <span>USA</span>
                    <br /> 2423 Lyttonsville Rd, Silver Spring, MD 20910.
                  </p>
                </div>
              </a>
              <a
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
                onClick={() =>
                  openMap(
                    "Darshana Heights, Bhayander West, Maharashtra 401101"
                  )
                }
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-end pb-2 gap-3 items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p className="font-semibold text-center">
                    <span className="">India</span>
                    <br /> Darshana Heights, Bhayander West, 401101.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex h-full w-fit items-center justify-center flex-col-reverse gap-6 sm:gap-12 py-8 px-8 text-center lg:text-left sm:mt-4 sm:rounded-lg ">
              <div className="w-full ">
                <form className="" onSubmit={handleSubmit} mai>
                  <div className="flex flex-col gap-x-10">
                    <input
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Your name *"
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Your email address *"
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      onChange={handlePhoneNumberChange}
                      required
                      placeholder="Your 10-digit phone number *"
                    />
                    <textarea
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[120px] bg-transparent font-secondary w-full p-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      type="text"
                      name="message"
                      value={message}
                      placeholder="Type a message to admin *"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {errorMessage && (
                    <div className="text-red-500 text-xs">*{errorMessage}</div>
                  )}
                  <button
                    className={`py-3 m-2 text-xl w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded ${
                      !loading && "cursor-pointer"
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Sending... Please Wait" : "Submit"}
                  </button>
                </form>
              </div>

              <div className="background">
                <div className="gallery">
                  <div className="card">
                    <figure>
                      <img
                        loading="lazy"
                        src={vectorcow}
                        alt=" Vector Cow"
                        title="Vector Cow"
                        className="w-full h-full"
                      />
                    </figure>
                  </div>
                  <div className="card">
                    <figure>
                      <img
                        loading="lazy"
                        src={Peacock}
                        alt="Peacock"
                        title="Peacock"
                        className="w-full h-full"
                      />
                    </figure>
                  </div>
                  <div className="card">
                    <figure>
                      <img
                        loading="lazy"
                        src={ClubLogowhite}
                        alt="Club Logo"
                        title="Club Logo"
                        className="bg-white w-full h-full"
                      />
                    </figure>
                  </div>
                  <div className="card">
                    <figure>
                      <img
                        loading="lazy"
                        src={artblue}
                        alt="Art 3"
                        title="Art 3"
                        className="bg-sky-300 w-full h-full"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
