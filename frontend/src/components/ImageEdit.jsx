import React from "react";
import { ServiceCard } from "../components";
import { imgedit1, imgedit2, imgedit3 } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ImageEdit = ({ setIsUploadOpen }) => {
  return (
    <div>
      <Helmet>
        <title>Image Editing | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Perfect your images with our professional image editing services. Whether it's retouching, color correction, or background removal, our skilled team enhances your visuals to meet the highest standards. Achieve the polished look your brand deserves."
        />
        <meta
          name="keywords"
          content="professional photo editing services,	ecommerce image editing services,	photo enhancement service,	image retouching,	photo editing services for photographers,	high end photo retouching services,	professional photo retouching,	best photo restoration services,	photo touchup,	ecommerce photo editing,	professional photo restoration,	i need someone to photoshop a picture for me,	photo correction service,	old photo restoration online,	remove background ,	clipping path photoshop,	faded photo restoration,	retouch pictures,	image editing services for ecommerce
          "
        />
        <link rel="canonical" href="https://logocraftsmen.com/imageedit" />
      </Helmet>
      <div className="m-3 sm:m-10 border-2 border-green-400 bg-green-100 rounded-[20px]">
        <div className="grid md:grid-cols-2 md:grid-rows-1 auto-rows-min md:gap-2 gap-4 px-8 py-10 ">
          <div className="flex flex-col gap-6 mt-8 md:px-8 md:py-6">
            <div>
              <div className="md:text-4xl text-2xl leading-8 md:leading-snug md:text-start text-center font-black tracking-widest">
                Image Editing Excellence!
              </div>
            </div>
            <div className="md:text-lg text-md md:text-start text-center mt-5">
              <span className=" font-serif font-bold text-2xl italic">
                &quot;Logo Craftsmen's Image Editing Elevates Your Pictures.
                Enhance, Retouch, and Perfect – Your Images.&quot;
              </span>
              <br />
              <br />
            </div>
            <div className="flex gap-4 items-center md:justify-start justify-center">
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
                  Portfolio
                </button>
              </Link>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsUploadOpen(true)}
              >
                Get Quote
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto my-6 ">
            <img
              loading="lazy"
              src={imgedit1}
              alt="Image Edit 1"
              title="Image Edit 1"
              className="md:w-full md:h-[24rem] sm:w-[60vw] mx-auto rounded-2xl shadow-zinc-700 "
            />
          </div>
        </div>
      </div>
      <div className="m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <h2 className={styles.sectionSubText}>
                Transforming Visions into Visual Masterpieces{" "}
              </h2>
              <h1 className={styles.sectionHeadText}>
                Image Editing Services.
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    At <span className="font-bold">Logo Craftsmen</span>, we
                    understand the power of a visually compelling image. Our
                    Image Editing Services are crafted to enhance and elevate
                    your photographs, ensuring they leave a lasting impression
                    on your audience. With precision, creativity, and a keen eye
                    for detail, we transform your visions into visual
                    masterpieces.
                    <br />
                    <br />
                    <span className="font-bold">What is Image Editing?</span>
                    <br />
                    Image editing refers to the process of enhancing or
                    improving the quality of a photograph using digital editing
                    software. It involves a comprehensive set of adjustments to
                    various parameters, including brightness, contrast, color
                    balance, sharpness, and other advanced features. Our image
                    editing services go beyond basic enhancements, providing a
                    meticulous touch that brings out the true potential of your
                    visuals.
                    <br />
                    <br />
                    <span className="font-bold">
                      Our Image Editing Process:
                    </span>
                    <br />
                    1. <span className="font-bold">
                      Detailed Assessment:
                    </span>{" "}
                    Every image undergoes a thorough assessment to identify
                    areas that can be improved. Whether it&#39;s for personal or
                    professional use, we tailor our editing approach to meet
                    your specific needs and objectives.
                    <br />
                    2. <span className="font-bold">
                      Creative Enhancement:
                    </span>{" "}
                    Our skilled editors bring creativity to the forefront,
                    adding a professional touch to your images. From subtle
                    adjustments to transformative edits, we ensure that each
                    image tells a compelling story.
                    <br />
                    3. <span className="font-bold">Quality Assurance:</span> Our
                    commitment to quality is unwavering. We use the latest
                    editing tools and techniques to guarantee that the final
                    result meets the highest standards, aligning with your
                    vision and purpose.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    loading="lazy"
                    className="object-cover w-full h-full md:h-auto  "
                    src={imgedit2}
                    alt="Image Edit 2"
                    title="Image Edit 2"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    loading="lazy"
                    className="object-cover w-full h-full md:h-auto "
                    src={imgedit3}
                    alt="Image Edit 3"
                    title="Image Edit 3"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    <span className="font-bold">Services Offered:</span>
                    <br />
                    1. <span className="font-bold">
                      Basic Enhancements:
                    </span>{" "}
                    Elevate the overall quality of your images with basic
                    enhancements. Adjustments to brightness, contrast, and color
                    balance ensure that your photos are vibrant and visually
                    appealing.
                    <br />
                    2. <span className="font-bold">
                      Advanced Retouching:
                    </span>{" "}
                    For images that require a more nuanced touch, our advanced
                    retouching services address imperfections, blemishes, and
                    other details. This is ideal for portraits, product
                    photography, or any visuals where flawless presentation is
                    paramount.
                    <br />
                    3. <span className="font-bold">Creative Effects:</span> Add
                    a touch of artistry to your images with creative effects.
                    From filters to artistic overlays, we enhance your visuals
                    to create a unique and impactful look that aligns with your
                    brand or personal style.
                    <br />
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <div className="m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <p className="flex justify-center font-semibold text-4xl">
                Why Choose Our Image Editing Services?
              </p>
              <div className="text-left">
                <p className="text-xl mt-4 ">
                  1. <span className="font-bold">Professional Expertise:</span>{" "}
                  Our team of skilled editors brings years of experience to the
                  table. From basic enhancements to intricate retouching, we
                  have the expertise to handle diverse image editing needs.
                  <br />
                  2. <span className="font-bold">Customization:</span> We
                  understand that each image has its own story. Our services are
                  highly customizable, ensuring that the edits align with your
                  specific requirements and objectives.
                  <br />
                  3.{" "}
                  <span className="font-bold">
                    Diverse Software Proficiency:
                  </span>{" "}
                  Whether you prefer Adobe Photoshop, Lightroom, or GIMP, our
                  team is proficient in a variety of image editing software,
                  providing flexibility to meet your preferred editing
                  environment.
                  <br />
                  4. <span className="font-bold">Free Rush Service:</span> Need
                  your edited images in a hurry? Our free rush service ensures
                  that urgent editing requests are prioritized without
                  compromising on the quality of the final output. We understand
                  the importance of timely deliverables.
                  <br />
                  <br />
                  <span className="italic">
                    Experience the transformative power of image editing with
                    Logo Craftsmen. Whether you&#39;re enhancing personal
                    photos, refining product images, or curating a stunning
                    portfolio, our services are designed to bring out the best
                    in your visuals.
                  </span>
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <ServiceCard />
    </div>
  );
};

export default ImageEdit;
