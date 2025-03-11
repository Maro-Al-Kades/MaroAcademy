"use client";

import { Image } from "@heroui/react";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <p className="font-light">Trusted by learners from</p>

      <div className="flex flex-row items-center justify-between max-w-screen-xl w-full flex-wrap">
        <Image
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          height={40}
          isBlurred
        />
        <Image
          src="https://www.freepnglogos.com/uploads/picture-logo-png/picture-microsoft-logo-png-13.png"
          height={40}
          isBlurred
        />
        <Image
          src="https://www.freepnglogos.com/uploads/paypal-logo-png-1.png"
          height={40}
          isBlurred
        />
        <Image
          src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-apa-itu-startup-pengertian-cara-memulai-dan-1.png"
          height={40}
          isBlurred
        />
        <Image
          src="https://www.freepnglogos.com/uploads/mazda-logo-3.png"
          height={40}
          isBlurred
        />
      </div>
    </div>
  );
};

export default TrustedBy;
