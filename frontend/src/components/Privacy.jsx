import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="relative m-3 sm:m-10 bg-emerald-200 rounded-[20px]">
      <Helmet>
        <title>Privacy | Logo Craftsmen </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore Logo Craftsmen's commitment to your safety through our Privacy Policy. Designed with your trust in mind, this policy outlines how we handle your information, ensuring a secure and personalized design experience. Discover how we prioritize your privacy, utilize cookies for enhancements, and implement security measures to safeguard your information. Your privacy matters, and Logo Craftsmen is dedicated to transparent practices, empowering you to manage your preferences and choices in crafting your design journey."
        />
        <meta
          name="keywords"
          content="Logo Craftsmen, privacy policy, trust, personalized design services, cookies, security measures, information protection, your privacy matters, transparent practices, managing preferences, design choices, age-appropriate design, policy evolution, communication"
        />
        <link rel="canonical" href="https://logocraftsmen.com/privacy" />
      </Helmet>
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div>
          <section className="container mx-auto ">
            <h2 className={styles.sectionSubText}>
              Your Safety is our Concern
            </h2>
            <h1 className={styles.sectionHeadText}>Privacy Policy</h1>
            <br />
            <br />
            <p>
              <span className="font-bold">1. Designing Trust</span>
              <br />
              Welcome to Logo Craftsmen, where your trust is our priority. This
              Privacy Policy outlines how we handle your information.
              <br />
              <br />
              <span className="font-bold">2. Your Design Story</span>
              <br />
              Logo Craftsmen collects your information to deliver personalized
              design services. Your journey with us is unique, and we're
              committed to respecting your privacy.
              <br />
              <br />
              <span className="font-bold">3. Cookies and Enhancements</span>
              <br />
              We use cookies to enhance your design experience. Manage your
              preferences through your browser settings to tailor your journey
              with us.
              <br />
              <br />
              <span className="font-bold">4. Secure Designs</span>
              <br />
              While we implement security measures, your peace of mind is our
              top priority. Rest assured, your information is treated with the
              utmost care.
              <br />
              <br />
              <span className="font-bold">5. Your Privacy Matters</span>
              <br />
              Your information won't be sold or traded without your consent.
              Your privacy matters, and we're committed to safeguarding it.
              <br />
              <br />
              <span className="font-bold">6. Designing Choices</span>
              <br />
              Choose how you want to experience Logo Craftsmen. Access, correct,
              or delete personal information. Opt-out of communications and
              manage cookie preferences.
              <br />
              <br />
              <span className="font-bold">7. Designing for All Ages</span>
              <br />
              We don't collect personal information from those under 13. Logo
              Craftsmen is crafted for all ages.
              <br />
              <br />
              <span className="font-bold">8. Designing Transparency</span>
              <br />
              As we grow, our policies may evolve. We'll keep you in the loop
              about any changes.
              <br />
              <br />
              <span className="font-bold">9. Connect with Us</span>
              <br />
              Have questions about these terms or our privacy practices? Reach
              out to art@logocraftsmen.com. We're here for you.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
