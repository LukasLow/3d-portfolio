import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { ContactForm } from "./ContactForm";
import { Sociallinks } from "./Sociallinks";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-between`}
    >
      <div className="w-full max-w-lg">
        <ContactForm />
      </div>
      <div className="w-full max-w-md">
        <Sociallinks />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
