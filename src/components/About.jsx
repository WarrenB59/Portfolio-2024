import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Vue d'ensemble.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        <p className="mb-4">
          <b>Salut, je suis Warren</b> 👋 <br />
          Je suis développeur front-end avec 3 années d&apos;expérience,
          spécialisé en React et passionné par la création d&apos;interfaces
          utilisateur modernes et intuitives. Mon objectif est d&apos;offrir des
          expériences numériques qui soient à la fois esthétiques et
          performantes.
        </p>
        <p className="mb-4">
          <b>Mes compétences clés</b> 🔧 <br />
          <li>
            <b>Frameworks & Libraries :</b> React, Redux, Next.js.
          </li>
          <li>
            <b>Outils :</b> TypeScript, Webpack, Sass, TailwindCSS.
          </li>
          <li>
            <b>UX/UI :</b> Sensibilité aux détails visuels, animation CSS,
            performance front-end.
          </li>
        </p>
        <p className="mb-4">
          <b>Ce qui me motive</b> 🌟 <br />
          J&apos;aime résoudre des défis complexes et voir mes idées prendre vie
          à travers du code. Mon approche est centrée sur l&apos;utilisateur, et
          je crois fermement que la simplicité et l&apos;élégance sont
          essentielles pour une expérience réussie.
        </p>
        <p>
          <b>À la recherche de nouveaux défis</b> 🚀 <br />
          Je suis actuellement ouvert à de nouvelles opportunités qui me
          permettront de contribuer à des projets innovants et stimulants. Je
          recherche des équipes qui partagent la passion pour la technologie et
          l&apos;amélioration continue.
        </p>
      </motion.p>

      <div className="mt-6 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
