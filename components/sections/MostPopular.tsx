import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import React from "react";
import CourseCard from "../CourseCard";

const MostPopular = () => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black text-primary">
            Most Popular Courses
          </h2>
          <p className="text-sm font-light max-w-xl">
            Discover our top-rated courses across various categories. From
            coding and design to business and wellness, our courses are crafted
            to deliver results.
          </p>
        </div>
        <Button
          color="primary"
          variant="flat"
          endContent={<Icon icon="hugeicons:eye" width="18" height="18" />}
        >
          Show More
        </Button>
      </div>

      <div className="flex flex-row flex-wrap gap-6">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default MostPopular;
