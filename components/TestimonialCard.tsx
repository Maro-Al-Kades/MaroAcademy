"use client";

import { Avatar, Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const TestimonialCard = () => {
  return (
    <Card className="w-[350px] p-3">
      <CardHeader className="flex gap-3">
        <Avatar
          isBordered
          color="primary"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />

        <div className="flex flex-col gap-0">
          <p className="text-primary font-medium text-lg">Maro Asam</p>
          <p className=" font-light text-sm">SWE 1 @ Amazon</p>
        </div>
      </CardHeader>

      <CardBody className="flex flex-col gap-4">
        <div className="flex flex-row gap-1 items-center justify-center text-warning">
          <Icon icon="majesticons:star" width="28" height="28" />
          <Icon icon="majesticons:star" width="28" height="28" />
          <Icon icon="majesticons:star" width="28" height="28" />
          <Icon icon="majesticons:star" width="28" height="28" />
          <Icon icon="majesticons:star" width="28" height="28" />
        </div>

        <p className="text-default-500 text-center">
          I have been using imagify for nearly two years, primarily for
          Instagram, and it has been incredibly user-friendly, making my work
          much easier.
        </p>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
