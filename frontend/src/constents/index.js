import {
  // javascript,
  // typescript,
  // html,
  // // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  // threejs,
  fastandfree,
  proprecision,
  vision,
  ontime,
  consult,
  designphase,
  qualitycontrol,
  delivery,
} from "../assets";

export const navLinks = [
  {
    id: "upload",
    title: "Get Quote",
  },
  {
    id: "about",
    title: "About",
  },
  {
    title: "Services",
    sublinks: [
      { name: "Vector Conversion", link: "/vector" },
      { name: "Embroidery Digitizing", link: "/embroidery" },
      { name: "Art / Virtual Proofs", link: "/artvisuals" },
      { name: "Order Entry Management", link: "/orderentry" },
      { name: "Image Editing", link: "/imageedit" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fast & Free",
    description:
      "Rush jobs? No problem. Our rush service is free, delivering quality with speed.",
    icon: fastandfree,
  },
  {
    title: "Pro Precision",
    description:
      "Experts in vector conversion and embroidery design for meticulous results.",
    icon: proprecision,
  },
  {
    title: "Your Vision, Our Mission",
    description: " Collaborate with us for your project. Questions? Just ask!",
    icon: vision,
  },
  {
    title: "On-Time Assurance",
    description:
      "Timely delivery is not just a promise; it's a cornerstone of our expertise.",
    icon: ontime,
  },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
  {
    title: "Project Consultation:",
    company_name: "Step-1",
    icon: consult,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Understand: Uncover goals.",
      "Assess: Scrutinize image complexity.",
    ],
  },
  {
    title: "Perfect & Collaborate:",
    company_name: "Step-2",
    icon: designphase,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Craft Excellence: Transform, adapt, and refine designs for impact.",
    ],
  },
  {
    title: "Quality Control:",
    company_name: "Step-3",
    icon: qualitycontrol,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Thorough Review: Rigorous quality control checks ensure high standards.",
      "Client Collaboration: Valuable feedback ensures satisfaction.",
    ],
  },
  {
    title: "Deliver & Guide:",
    company_name: "Step-4",
    icon: delivery,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Files: Deliver in various formats.",
      "Guidelines: Guide for optimal results.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Absolutely stoked wearing my company logo, vectorized to perfection! Jersey game = on point. Thanks! ✨",
    name: "Filip Cerny",
    designation: "System Admin",
    company: "Polymer",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "Jersey went from meh to wow! with stitch magic. My logo's never looked so legit.Thanks for the upgrade!",
    name: "Rochelle Fernandes",
    designation: "Designer",
    company: "Nudge",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    testimonial:
      "Appreciting the work of editing images of our products with great pixelation by Logo Craftsmen",
    name: "Jessica Strobehn",
    designation: "Design Lead",
    company: "Clay",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const faqs = [
  {
    question: "What is the typical turnaround time for a logo design project?",
    answer:
      "The turnaround time can vary based on the complexity of the project. Generally, we aim to deliver initial logo concepts within same day. The total duration depends on the number of revisions and client feedback. We strive to meet your deadlines and can provide estimated timelines during the initial consultation.",
  },
  {
    question: "Can you convert any image to a vector graphic?",
    answer:
      "We can convert most raster images to vector format. However, the quality and complexity of the original image can affect the conversion process. We'll assess your image during the project consultation and inform you of any limitations or challenges.",
  },
  {
    question:
      "What file formats will I receive for my vector or embroidery design?",
    answer:
      "For vector conversions, we provide the final design in commonly used vector formats such as AI, EPS, and SVG, which are ideal for printing and digital use. For embroidery designs, you'll receive the design in formats compatible with embroidery machines, such as DST, PES, or other industry-standard formats.",
  },
  {
    question: "Do you offer any guarantees or revisions for your designs?",
    answer:
      "We value client satisfaction and offer a reasonable number of revisions to ensure you are thrilled with the final design. Your feedback is crucial during the revision process, and we work closely with you to refine the design according to your preferences.",
  },
  {
    question: "How do I provide feedback during the design process?",
    answer:
      "We encourage open communication and collaboration. You can provide feedback via email or the communication platform we use for the project. Specific feedback on what you like or would like to change helps us tailor the design to your vision.",
  },
  {
    question:
      "What is the pricing structure for vector conversion and embroidery services?",
    answer:
      "Our pricing is based on the complexity of the project and the specific requirements. We offer transparent pricing with different packages to suit your needs. Contact us for a customized quote, and we'll provide detailed information about the pricing structure.",
  },
  {
    question:
      "Can you provide embroidery designs for specific fabrics and materials?",
    answer:
      "Yes, we consider the type of fabric or material you plan to use for embroidery. We provide guidelines on how the design should be stitched to achieve the best results, ensuring that it suits your chosen fabric and product.",
  },
  {
    question: "Do you offer rush services for urgent projects?",
    answer:
      "Yes, we understand that some projects have tight deadlines. We offer rush services for urgent projects, and we will work with you to accommodate your timeline. Without any Rush charges.",
  },
  {
    question:
      "How can I get started with a logo design, vector conversion, or embroidery project with Logo Craftsmen?",
    answer:
      "Getting started is easy. Simply reach out to us via our website or contact us through email or phone. We'll set up an initial consultation to discuss your project, understand your needs, and provide you with a customized plan to bring your design ideas to life.",
  },
];

export const Contacts = [{ name: "Prashant Jaiswal", link: "#" }, { name: "" }];

export const Services = [
  { name: "Vector Conversion", link: "/vector" },
  { name: "Embroidery Digitizing", link: "/embroidery" },
  { name: "Art / Virtual Proofs", link: "/artvisuals" },
  { name: "Order Entry Management", link: "/orderentry" },
  { name: "Image Editing", link: "/imageedit" },
];

export const Insights = [
  { name: "Portfolio", link: "/portfolio" },
  { name: "FAQs", link: "/faqs" },
];

export const Company = [
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export const Icons = [
  { name: "logo-facebook", link: "#" },
  { name: "logo-twitter", link: "#" },
  { name: "logo-instagram", link: "#" },
  { name: "logo-linkedin", link: "#" },
];

export { faqs, services, experiences, testimonials };
