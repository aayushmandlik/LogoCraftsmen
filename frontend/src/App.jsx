import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  FAQs,
  Navbar,
  Portfolio,
  Landing,
  Vector,
  Embroidery,
  ImageEdit,
  ArtVisuals,
  OrderEntry,
  Error,
  Footer,
  Terms,
  Privacy,
} from "./components";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Upload from "./components/Upload";

const App = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  return (
    <div>
      {isUploadOpen && (
        <Upload isUploadOpen={isUploadOpen} setIsUploadOpen={setIsUploadOpen} />
      )}
      <BrowserRouter>
        <div className="relative z-0 ">
          <div className="bg-cover bg-no-repeat pb-24">
            <Navbar setIsUploadOpen={setIsUploadOpen} />
          </div>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <Home
                  isUploadOpen={isUploadOpen}
                  setIsUploadOpen={setIsUploadOpen}
                />
              }
            />
            <Route
              path="/contact"
              element={<Contact setIsUploadOpen={setIsUploadOpen} />}
            />
            <Route
              path="/vector"
              element={<Vector setIsUploadOpen={setIsUploadOpen} />}
            />
            <Route
              path="/embroidery"
              element={<Embroidery setIsUploadOpen={setIsUploadOpen} />}
            />
            <Route
              path="/imageedit"
              element={<ImageEdit setIsUploadOpen={setIsUploadOpen} />}
            />
            <Route
              path="/artvisuals"
              element={<ArtVisuals setIsUploadOpen={setIsUploadOpen} />}
            />
            <Route path="/orderentry" element={<OrderEntry />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
