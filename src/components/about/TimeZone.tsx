import React from "react";
import { Globe } from "../globe";

const TimeZone = () => {
  return (
    <div>
      <div className="z-10 w-[50%]">
        <p className="headtext">Time Zone</p>
        <p className="subtext">
          I am based in Lagos, Nigeria, and open to work anywhere within Lagos
          or remotely.
        </p>
      </div>
      <figure className="absolute left-[30%] top-[10%]">
        <Globe />
      </figure>
    </div>
  );
};

export default TimeZone;
