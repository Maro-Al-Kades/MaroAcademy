import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Icon } from "@iconify/react";
import React from "react";

const AddCourseRoute = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-4">
      <Input
        color="primary"
        variant="bordered"
        label="Course Title"
        labelPlacement="outside"
        placeholder="write the course title..."
      />
      <Input
        color="primary"
        variant="bordered"
        label="Course Headings"
        labelPlacement="outside"
        placeholder="write the course Headings..."
      />
      <Textarea
        color="primary"
        variant="bordered"
        label="Course Description"
        labelPlacement="outside"
        placeholder="write the course Description..."
      />
      <Input
        color="primary"
        variant="bordered"
        label="Course Price"
        labelPlacement="outside"
        placeholder="write the course Price..."
        type="number"
      />
      <Input
        color="primary"
        variant="bordered"
        label="Course Thumbnail"
        labelPlacement="outside"
        type="file"
      />

      <Button
        color="primary"
        endContent={
          <Icon icon="hugeicons:add-circle-half-dot" width="20" height="20" />
        }
      >
        Add Course
      </Button>
    </div>
  );
};

export default AddCourseRoute;
