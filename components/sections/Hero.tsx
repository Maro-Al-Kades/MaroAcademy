"use client";

import { Button, Image, Input, Kbd } from "@heroui/react";
import React from "react";
import { SearchIcon } from "../icons";
import { Icon } from "@iconify/react";

const Hero = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search about your courses..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  return (
    <div className="w-full flex flex-row items-center justify-between ">
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-5xl font-bold ">
          Empower your future with the courses{" "}
          <span className="text-primary">designed to fit your choice.</span>
        </h1>

        <p className="font-light ">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>

        <div className="mt-5">{searchInput}</div>

        <div className="flex flex-row gap-4">
          <Button
            color="primary"
            endContent={
              <Icon
                icon="hugeicons:elearning-exchange"
                width="20"
                height="20"
              />
            }
            size="lg"
            fullWidth
          >
            Discover Courses
          </Button>
          <Button
            color="primary"
            variant="flat"
            endContent={
              <Icon
                icon="hugeicons:elearning-exchange"
                width="20"
                height="20"
              />
            }
            size="lg"
            fullWidth
          >
            Create New Account
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src="https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={600}
          isBlurred
        />
      </div>
    </div>
  );
};

export default Hero;
