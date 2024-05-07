import React from "react";
import Hero from "./Hero";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Logo Craftsmen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Logo Craftsmen - A logo printing company in the USA specializing in various types of printing with a variety of images."
        />
        <meta
          name="keywords"
          content="logo design, vector conversion, embroidery services, turnaround time, file formats, design guarantees, design revisions, pricing structure, embroidery on specific fabrics, rush services, Logo Craftsmen, design consultation, design process, client satisfaction"
        />
        <link rel="canonical" href="https://logocraftsmen.com/"></link>
      </Helmet> */}
      <div className="Home">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
