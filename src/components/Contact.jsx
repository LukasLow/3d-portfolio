import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-between`}
    >
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
