"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Link,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const CourseCard = () => {
  return (
    <Card className="max-w-[350px]" isHoverable>
      <CardHeader>
        <Image src="https://heroui.com/images/hero-card-complete.jpeg" />
      </CardHeader>

      <CardBody className="flex flex-col gap-2">
        <h3 className="font-bold">Build Text to image SaaS App in React JS</h3>
        <p className="text-small text-primary font-light">Author: Maro Asam</p>

        <div className="flex flex-row gap-2">
          <Chip color="primary" variant="flat">
            10.5 $
          </Chip>
          <Chip
            color="warning"
            variant="flat"
            endContent={<Icon icon="hugeicons:star" width="13" height="13" />}
          >
            4.5
          </Chip>
        </div>
      </CardBody>

      <CardFooter>
        <Button
          fullWidth
          color="primary"
          endContent={
            <Icon
              icon="hugeicons:hand-pointing-right-02"
              width="20"
              height="20"
            />
          }
          as={Link}
          href="/courses/1"
        >
          Course Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
