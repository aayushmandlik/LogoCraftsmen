import { useState } from "react";
import Peacock from "../assets/peacock.jpg";
import { vectorcow, ClubLogo, art3, ClubLogowhite, artblue } from "../assets";
import axios from "axios";
import { toast } from "react-toastify";
import { styles } from "../styles";
import convertToBase64 from "./ImgtoBase64";

const initialFormData = {
  name: "",
  email: "",
  message: "",
  phone: "",
  service: "",
  ImageFile: [],
};

const ContactLanding = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, phone, message, service } = formData;

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

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setFormData((p) => ({
      ...p,
      service: selectedValue,
    }));
  };

  const handleFileChange = async (e) => {
    const input = e.target;
    const maxSize = 15 * 1024 * 1024;

    if (input.files.length > 0) {
      const totalSize = Array.from(input.files).reduce(
        (acc, file) => acc + file.size,
        0
      );

      if (totalSize <= maxSize) {
        setErrorMessage("");
      } else {
        setErrorMessage("Total size of selected attachments exceeds 15 MB.");
        input.value = "";
      }

      const imageArray = [];
      for (var i = 0; i < input.files.length; i++) {
        const file = e.target.files[i];
        const base64 = await convertToBase64(file);
        imageArray.push(base64);
      }
      setFormData((prev) => ({
        ...prev,
        ImageFile: imageArray,
      }));
    }
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

    try {
      const response = await axios.post(
        `https://backend-logocraftsmen.onrender.com/uploadImages`,
        formData
      );

      if (response.status === 200) {
        toast.success("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Error occurred while sending email");
    } finally {
      setLoading(false);
      setFormData({
        ...initialFormData,
      });

      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.value = [];
      }
    }
  };

  return (
    <div>
      <div className="m-3 sm:m-10 flex flex-col bg-fuchsia-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <h2 className={styles.sectionSubText}>
            Upload your file, and watch us craft your design
          </h2>
          <h2 className={styles.sectionHeadText}>Get Quotation</h2>
          <div className="flex justify-center items-center">
            <div className="flex h-full w-fit items-center justify-center flex-col-reverse gap-6 sm:gap-12 py-8 px-8 text-center lg:text-left sm:mt-4 sm:rounded-lg ">
              <div className="w-full ">
                <form className="" onSubmit={handleSubmit}>
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

                    <select
                      onChange={handleSelectChange}
                      value={service}
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                    >
                      <option value="" className="text-black">
                        Select Service
                      </option>
                      {options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="text-black"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <textarea
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[120px] bg-transparent font-secondary w-full p-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      type="text"
                      name="message"
                      value={message}
                      placeholder="Design Details: Optimal file format and desired size *"
                      onChange={handleChange}
                      required
                    />

                    <input
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 py-4 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879] "
                      type="file"
                      id="fileInput"
                      name="ImageFile"
                      onChange={handleFileChange}
                      multiple
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
                        alt="Vector Cow"
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
                        title="Logo Print Art"
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

export default ContactLanding;
