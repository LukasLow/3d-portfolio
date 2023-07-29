import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PublicsCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const tiltOptions = {
    max: 45,
    scale: 1,
    speed: 450,
    disableAxis: showPopup ? "X Y" : "",
  };

  const renderPopup = () => {
    if (!showPopup) return null;

    return ReactDOM.createPortal(
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-100">
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-10"
          onClick={handlePopupClose}
        />
        <div className="bg-black p-8 rounded-xl z-50 max-w-full overflow-y-scroll">
          <h2 className={`${styles.sectionHeadText}`}>{name}</h2>
          <div className="mt-3 max-h-[60vh] pr-4">
            <p className="text-secondary text-[17px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          <button
            onClick={handlePopupClose}
            className="w-10 h-10 bg-primary flex items-center justify-center text-white font-bold text-xl rounded-full mt-4 mx-auto"
          >
            X
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="relative">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="cursor-pointer"
      >
        <Tilt
          options={tiltOptions}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-[100%] flex flex-col justify-center"
        >
          <div className="relative w-full h-[430px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}

              {website_link && (
                <div
                  onClick={() => window.open(website_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src={website}
                    alt="webseite"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 text-center" onClick={handleCardClick}>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            <button
              className="mt-4 bg-primary rounded-full text-white font-bold py-2 px-4"
              onClick={handleCardClick}
            >
              Mehr
            </button>
          </div>
        </Tilt>
      </motion.div>

      {renderPopup()}
    </div>
  );
};

const Publica = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>My academic work</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here, I showcase my academic work, including my essays, research papers, and other 
          projects related to my studies. These assignments reflect my analytical thinking, research 
          skills, and ability to articulate my thoughts effectively. I have covered a wide range of 
          topics, including Data Science and Physics.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {publications.map((publication, index) => (
          <PublicsCard
            key={`publication-${index}`}
            index={index}
            {...publication}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Publica, "publications");
