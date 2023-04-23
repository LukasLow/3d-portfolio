import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";


export const Sociallinks = () => {
  return (
    <div
      className={``}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Feel free to contact me</p>
        <h3 className={styles.sectionHeadText}>Lets Talk.</h3>




          <button
            type='submit'
            className='mt-12 flex flex-col gap-8 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            Send
          </button>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* <EarthCanvas scale={2.5} /> */}
      </motion.div>
    </div>
  );
};
