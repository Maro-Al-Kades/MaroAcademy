"use client";

import CourseCard from "@/components/CourseCard";
import { SearchIcon } from "@/components/icons";
import { BreadcrumbItem, Breadcrumbs, Input, Pagination } from "@heroui/react";
import React from "react";

const page = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      color="primary"
      placeholder="Search about your courses..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black text-primary">Courses List</h2>
          <Breadcrumbs>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem>Courses List</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
      <div className="flex items-center justify-center ">{searchInput}</div>

      <div className="flex flex-row items-start gap-6 flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      <div className="flex items-center justify-center">
        <Pagination showControls initialPage={1} total={10} />
      </div>
    </div>
  );
};

export default page;
