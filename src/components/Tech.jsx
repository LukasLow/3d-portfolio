import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='sm:w-28 sm:h-28 w-1/4 h-1/4 ' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {/*  // Hier den Namen der Technologie anzeigen */}
          <p className='text-center mt-2'>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
