import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="relative m-3 sm:m-10 bg-sky-200 rounded-[20px]">
      <Helmet>
        <title>Terms | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the terms of service at Logo Craftsmen, where your comfort is prioritized. Discover our commitment to delivering crafted designs tailored to your vision. Learn about the integrity of your designs, your creative journey with us, and the trust we place in our craft. Review how we tailor our services, ensuring satisfaction, and understand our commitment to evolving together with you. Welcome to Logo Craftsmen's Terms of Service – your gateway to a seamless and trusted design experience."
        />
        <meta
          name="keywords"
          content="Logo Craftsmen, terms of service, crafted designs, design integrity, intellectual property, creative journey, copyright compliance, trust in our craft, liability, termination of services, user satisfaction, evolving together, modifications to terms, design experience."
        />
        <link rel="canonical" href="https://logocraftsmen.com/terms" />
      </Helmet>
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div>
          <section className="container mx-auto ">
            <h2 className={styles.sectionSubText}>
              Your Comfort is our Comfort
            </h2>
            <h1 className={styles.sectionHeadText}>Terms Of Service</h1>
            <br />
            <br />
            <p>
              <span className="font-bold">1. Welcome to Logo Craftsmen!</span>
              <br />
              Thanks for choosing Logo Craftsmen for your design needs. By
              accessing our services at www.logocraftsmen.com or communicating
              via art@logocraftsmen.com, you agree to the following terms.
              <br />
              <br />
              <span className="font-bold">2. Crafted Designs, Your Way</span>
              <br />
              Logo Craftsmen specializes in creating unique designs from your
              provided files. We're here to bring your vision to life and
              deliver high-quality designs that stand out.
              <br />
              <br />
              <span className="font-bold">3. Design Integrity</span>
              <br />
              Your designs remain your intellectual property. We may showcase
              them in our portfolio to inspire others, but only with your
              agreement.
              <br />
              <br />
              <span className="font-bold">4. Your Design Journey</span>
              <br />
              As we embark on this creative journey together, please ensure your
              uploaded files comply with copyright laws and are free from
              malicious content.
              <br />
              <br />
              <span className="font-bold">5. Trust in Our Craft</span>
              <br />
              While we strive for perfection, Logo Craftsmen is not liable for
              indirect, incidental, or consequential damages arising from the
              use of our services.
              <br />
              <br />
              <span className="font-bold">6. Tailoring Our Services</span>
              <br />
              We reserve the right to terminate services for users not adhering
              to these terms. Your satisfaction is our priority.
              <br />
              <br />
              <span className="font-bold">7. Evolving Together</span>
              <br />
              Logo Craftsmen may modify these terms to better serve you. We'll
              keep you informed of any changes.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
