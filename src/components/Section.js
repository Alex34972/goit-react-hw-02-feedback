import React from "react";

const Section = ({ title, children }) => {
  return (
    <section title="">
      <h2 className="heading">{title}</h2>
      {children}
    </section>
  );
};
export default Section;
