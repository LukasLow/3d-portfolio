import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

import { styles } from "../styles";
import { sociallinks } from "../constants";

const CustomComponent = () => {

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
          {/* ... */}
          <motion.div
            className='flex flex-row items-center'
          >
            {navLinks.slice(0, 3).map((nav) => (
              <a key={nav.id} href={nav.id} className='LinkButton'>
                <Image
                  src={nav.image}
                  alt={nav.title}
                  className="h-6"
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </motion.div>
          {/* ... */}
        </div>
      );
    };
    