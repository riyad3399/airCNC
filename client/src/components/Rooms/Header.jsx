import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Veluvana Bali - Owl Bamboo House"
        subtitle="Sidemen, Indonesia"
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-820950793239599563/original/d5c1f686-f06a-4b65-9f55-32e19dc0b23f.jpeg"
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
