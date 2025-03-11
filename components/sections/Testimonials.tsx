import React from "react";
import TestimonialCard from "../TestimonialCard";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black text-primary">Testimonials</h2>
        <p className="text-sm font-light max-w-xl">
          Hear from our learners as they share their journeys of transformation,
          success, and how our platform has made a difference in their lives.
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
