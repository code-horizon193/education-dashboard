import React from "react";

const TwoColumn = ({ children }) => {
  return (
    <section className="w-full my-6 relative h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {children}
      </div>
    </section>
  );
};

export default TwoColumn;
