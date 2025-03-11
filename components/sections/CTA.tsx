import { Button } from "@heroui/button";
import React from "react";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-black text-primary">
        Learn anything, anytime, anywhere
      </h1>

      <p className="text-default-500 max-w-xl text-center">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>

      <div className="flex gap-3">
        <Button size="lg" color="primary">
          Get Started
        </Button>
        <Button size="lg" variant="bordered" color="primary">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default CTA;
