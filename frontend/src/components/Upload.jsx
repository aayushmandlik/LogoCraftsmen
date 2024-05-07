import React, { useState } from "react";
import { Fade, Modal } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import convertToBase64 from "./ImgtoBase64";

const Upload = ({ isUploadOpen, setIsUploadOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    phone: "",
    ImageFile: [],
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message, phone, service } = formData;

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
        "Payload Size is greater than 25mb. Try to reduce size of images."
      );
    }
    setLoading(true);

    const response = await axios.post(
      "https://backend-logocraftsmen.onrender.com/uploadImages",
      formData
    );
    if (response.status === 200) {
      toast.success("Email sent successfully!");
      setIsUploadOpen(false);
    } else toast.error("Error occured while sending email");

    setLoading(false);

    setIsUploadOpen(false);
  };

  return (
    <Modal
      open={isUploadOpen}
      onClose={() => setIsUploadOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ bgColor: "rgba(0,0,0,0)" }}
    >
      <Fade in={isUploadOpen}>
        <section className="absolute top-[50%] left-[50%] w-[90vw] sm:w-[50vw] -translate-x-[50%] -translate-y-[50%] bg-gray-900 rounded-lg text-gray-200 ">
          <div className="container mx-auto mt-4">
            <div className="flex flex-col items-center justify-center mt-6 text-center ">
              <h1 className="sm:text-4xl text-2xl font-semibold mb-2 text-teal-400">
                Make Order
              </h1>
              <div className="sm:text-lg text-md font-medium ">
                Its time to create something exciting!
              </div>
            </div>
            <div className="flex h-full sm:w-full w-fit items-center justify-start sm:flex-row flex-col-reverse gap-6 sm:gap-12 py-8 px-8 text-center lg:text-left sm:mt-4 sm:rounded-lg sm:mx-auto">
              <div className="lg:flex-1">
                <form className="" onSubmit={handleSubmit} mai>
                  <div className="flex flex-col gap-x-10">
                    <input
                      className="outline-none border-b border-b-gray-400
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Your name"
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="outline-none border-b border-b-gray-400
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Your email address"
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      className="outline-none border-b border-b-gray-400
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                      onChange={handlePhoneNumberChange}
                      required
                      placeholder="Your 10-digit phone number"
                    />

                    <select
                      onChange={handleSelectChange}
                      value={service}
                      className="h-[60px] bg-transparent font-secondary w-full pl-3 outline-none appearance-none cursor-pointer border-b border-b-gray-400"
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
                    <input
                      className="outline-none border-b border-b-gray-400
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                      type="text"
                      name="message"
                      value={message}
                      placeholder="Type a message: File format and desired size"
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="outline-none border-b border-b-gray-400
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] pt-4"
                      type="file"
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
                    className={`py-3 bg-teal-400 text-gray-900 font-medium text-xl w-full rounded-lg mt-4  hover:bg-transparent hover:text-teal-400 border-2 border-teal-400 ${
                      !loading && "cursor-pointer"
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Sending... Please Wait" : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </Modal>
  );
};

export default Upload;
