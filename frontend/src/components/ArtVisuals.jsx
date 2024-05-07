import React from "react";
import { ServiceCard } from "../components";
import { art1, art2, art3 } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ArtVisuals = ({ setIsUploadOpen }) => {
  return (
    <div>
      <Helmet>
        <title>Art / Virtual Proofs | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Visualize your brand on promotional products before production. Our mockup services allow you to preview your logo or design on various items, ensuring a perfect match with your brand identity. Make informed decisions and stand out with confidence."
        />
        <meta
          name="keywords"
          content="promotional items mockup,	stadium cup mockup,	promotion stand mockup,	company logo merchandise,	mock up template,	t shirt design mockup,	create clothing mockups"
        />
        <link rel="canonical" href="https://logocraftsmen.com/artvisuals" />
      </Helmet>
      <div className="m-3 sm:m-10 border-2 border-green-400 bg-green-100 rounded-[20px]">
        <div className="grid md:grid-cols-2 md:grid-rows-1 auto-rows-min md:gap-2 gap-4 px-8 py-10 ">
          <div className="flex flex-col gap-6 mt-8 md:px-8 md:py-6">
            <div>
              <div className="md:text-4xl text-2xl leading-8 md:leading-snug md:text-start text-center font-black tracking-widest">
                Virtual Mockup!
              </div>
            </div>
            <div className="md:text-lg text-md md:text-start text-center mt-5">
              <span className=" font-serif font-bold text-2xl italic">
                &quot;Elevate Your Brand's Radiance! Preview the Power with Our
                Promotional Products Mockup Service.&quot;
              </span>
              <br />
              <br />
              <br />
            </div>
            <div className="flex gap-4 items-center md:justify-start justify-around">
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
              src={art1}
              className="md:w-full md:h-[24rem] sm:w-[60vw] mx-auto rounded-2xl shadow-zinc-700 "
              alt="Art 1"
              title="Art 1"
            />
          </div>
        </div>
      </div>
      <div className="m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <h2 className={styles.sectionSubText}>
                Mockup for Virtual Proof by Logo Craftsmen
              </h2>
              <h1 className={styles.sectionHeadText}>
                Visualize Your Brand's Impact.
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    At <span className="font-bold">Logo Craftsmen</span>, we
                    understand the power of visualizing your brand's potential.
                    Introducing our Mockup for Virtual Proof service - your key
                    to unlocking a captivating preview of your promotional
                    products before they come to life. Get ready to embark on a
                    journey where your brand's impact is not just imagined but
                    brought to life in vivid, lifelike detail.
                    <br />
                    <br />
                    <span className="font-bold">How It Works:</span>
                    <br />
                    1. <span className="font-bold">
                      Tell Us Your Story:
                    </span>{" "}
                    Begin with a detailed consultation. Share your promotional
                    product requirements, design aspirations, and brand
                    narrative with us.
                    <br />
                    2. <span className="font-bold">
                      See it Come Alive:
                    </span>{" "}
                    Watch as our skilled designers weave magic into your ideas,
                    creating vibrant, true-to-life mockups that transcend the
                    digital realm.
                    <br />
                    3.{" "}
                    <span className="font-bold">
                      Collaborative Feedback:
                    </span>{" "}
                    Your feedback matters. Engage in a collaborative process
                    where revisions and adjustments ensure that the mockup
                    aligns seamlessly with your expectations.
                    <br />
                    4.{" "}
                    <span className="font-bold">
                      Final Approval, Seamless Production:
                    </span>{" "}
                    Once you're delighted with the virtual proof, we seamlessly
                    transition to the production phase, bringing your envisioned
                    promotional products into reality.
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    loading="lazy"
                    className="object-cover w-full h-full md:h-auto  "
                    src={art2}
                    alt="Art 2"
                    title="Art 2"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    loading="lazy"
                    className="object-cover w-full h-full md:h-auto "
                    src={art3}
                    alt="Art 3"
                    title="Art 3"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    <h3 className="font-bold">
                      Why Choose Our Mockup for Virtual Proof Service?
                    </h3>
                    <br />
                    1.{" "}
                    <span className="font-bold">
                      See Before You Believe:
                    </span>{" "}
                    Witness the magic of your promotional products in a virtual
                    realm before they hit production. Our mockups provide a
                    crystal-clear preview, allowing you to see every detail,
                    color, and nuance, ensuring that what you envision is
                    precisely what you get.
                    <br />
                    2.{" "}
                    <span className="font-bold">
                      Realism that Speaks Volumes:{" "}
                    </span>{" "}
                    Our mockups go beyond mere representations. We craft
                    realistic, high-quality simulations that showcase your
                    promotional products in various settings, breathing life
                    into your designs and letting you experience their potential
                    impact.
                    <br />
                    3.{" "}
                    <span className="font-bold">
                      Collaborate Seamlessly:{" "}
                    </span>{" "}
                    Your vision, our expertise. Our Mockup for Virtual Proof
                    service is a collaborative experience. We invite your input
                    and feedback throughout the process, ensuring that the final
                    mockup aligns perfectly with your brand identity and
                    promotional goals.
                    <br />
                    4. <span className="font-bold">
                      Refine and Perfect:
                    </span>{" "}
                    Use the mockup stage to refine your designs. Catch any
                    potential issues or make adjustments early on, saving time
                    and resources in the production phase. It's design
                    refinement made easy.
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
              <h3 className="flex justify-center font-semibold text-4xl">
                Why Trust Logo Craftsmen?
              </h3>
              <div className="text-left">
                <p className="text-xl mt-4 ">
                  1. <span className="font-bold">Precision Personified:</span>{" "}
                  Our mockups are more than just previews; they are precise
                  representations that mirror the quality of the final product.
                  <br />
                  2.{" "}
                  <span className="font-bold">
                    Your Partner in Creation:
                  </span>{" "}
                  We don't just craft mockups; we collaborate with you to create
                  impactful, brand-centric visuals that resonate with your
                  audience.
                  <br />
                  3.{" "}
                  <span className="font-bold">
                    Efficiency Meets Excellence:
                  </span>{" "}
                  Experience a streamlined process that combines efficiency with
                  the utmost attention to detail, ensuring quick turnaround
                  times without compromising quality.
                  <br />
                  <br />
                  <span className="italic">
                    Ready to see your brand's impact unfold? Embrace the Mockup
                    for Virtual Proof service by Logo Craftsmen. Let's turn your
                    ideas into visual stories that captivate, resonate, and
                    leave a lasting impression. Your brand journey begins with a
                    single, vibrant mockup.
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

export default ArtVisuals;
