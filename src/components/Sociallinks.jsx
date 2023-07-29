import React from "react";
import { motion } from "framer-motion";
import { sociallinks } from "../constants";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";


export const Sociallinks = () => {
  return (
    <div className={`flex flex-col items-start`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>You can find me on</p>
        <h3 className={styles.sectionHeadText}>The Web</h3>

        {sociallinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 w-full flex flex-col gap-2 items-start bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary"
          >
            <div className="flex items-center">
              <img
                src={link.logo}
                alt={link.platform}
                className="w-16 h-16 mr-4"
              />
              <div>
                <p className="text-lg font-semibold text-white">{link.platform}</p>
                <p className="text-base font-normal text-gray-300">{link.username}</p>
              </div>
            </div>
          </a>
        ))}
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[3500px] md:h-[550px] h-[350px] overflow-visible"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <EarthCanvas scale={2.8} className="xl:flex-1 xl:h-[3500px] md:h-[550px] h-[350px]" />
      </motion.div> */}

    </div>
  );
};
