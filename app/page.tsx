import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import MostPopular from "@/components/sections/MostPopular";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-32">
      <Hero />
      <TrustedBy />
      <MostPopular />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default page;
