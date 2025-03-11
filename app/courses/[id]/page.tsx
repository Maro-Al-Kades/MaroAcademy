"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const CourseID = () => {
  return (
    <div className="flex flex-row w-full items-start gap-10">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="text-3xl font-black text-primary">
          Build Text to image SaaS App in React JS
        </h1>

        <p className="max-w-2xl text-default-500">
          Master MERN Stack by building a Full Stack AI Text to Image SaaS App
          using React js, Mongodb, Node js, Express js and Stripe Payment
        </p>

        <div className="flex flex-row gap-2">
          <Chip size="lg" color="primary" variant="flat">
            10.5 $
          </Chip>
          <Chip
            size="lg"
            color="warning"
            variant="flat"
            endContent={<Icon icon="hugeicons:star" width="13" height="13" />}
          >
            4.5
          </Chip>
        </div>

        <p className="font-light text-primary-800">
          Author: <span className="text-primary">Maro Asam</span>
        </p>

        <div className="flex flex-col gap-1">
          <h3 className="font-bold mt-8 text-2xl text-primary">
            Course Description :
          </h3>
          <p className="text-sm font-light max-w-2xl">
            JavaScript is currently the most popular programming language in the
            world. If you are an aspiring web developer or full stack developer,
            JavaScript is a must to learn. It also helps you to get high-paying
            jobs all over the world.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold mt-8 text-2xl text-primary">
            Course Structure :
          </h3>
          <p className="text-sm font-light text-primary">
            22 sections - 54 lectures - 27h 25m total durations
          </p>
        </div>

        <Accordion variant="shadow" defaultExpandedKeys={["1"]}>
          <AccordionItem
            key="1"
            aria-label="Project Introduction"
            subtitle="3 lectures - 45 m"
            title="Project Introduction"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Project Introduction"
            subtitle="3 lectures - 45 m"
            title="Project Introduction"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Project Introduction"
            subtitle="3 lectures - 45 m"
            title="Project Introduction"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <p className="flex gap-1 items-center">
                  <Icon
                    icon="hugeicons:play-square"
                    className="text-primary"
                    width="20"
                    height="20"
                  />
                  App Overview – Build Text-to-Image SaaS
                </p>
                <Chip color="primary" variant="flat">
                  10 mins
                </Chip>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <Card className="w-[400px] p-2">
        <CardHeader>
          <Image src="https://heroui.com/images/hero-card-complete.jpeg" />
        </CardHeader>

        <CardBody className="flex flex-col gap-4">
          <p className="text-danger text-light flex gap-2 items-center">
            <Icon icon="hugeicons:time-quarter-02" width="20" height="20" />5
            days left at this price!
          </p>

          <div className="flex gap-3 items-center">
            <h2 className="text-3xl font-bold">10.99 $</h2>
            <del className="text-default-600">20.99 $</del>
            <Chip color="warning" variant="flat">
              50% OFF
            </Chip>
          </div>

          <div className="flex gap-5 items-center text-default-500">
            <p className="flex gap-2 items-center">
              <Icon
                icon="hugeicons:star"
                width="18"
                height="18"
                className="text-primary"
              />
              4.5
            </p>
            <span>|</span>
            <p className="flex gap-2 items-center">
              <Icon
                icon="hugeicons:time-quarter-02"
                width="18"
                height="18"
                className="text-primary"
              />
              30 hours
            </p>
            <span>|</span>
            <p className="flex gap-2 items-center">
              <Icon
                icon="hugeicons:book-open-02"
                width="18"
                height="18"
                className="text-primary"
              />
              54 lessons
            </p>
          </div>

          <Button
            color="primary"
            variant="solid"
            endContent={
              <Icon
                icon="hugeicons:add-circle-half-dot"
                width="20"
                height="20"
              />
            }
          >
            Enroll Now
          </Button>
        </CardBody>

        <CardFooter className="flex w-full items-start flex-col gap-4">
          <h3 className="text-lg font-semibold ">What’s in the course ?</h3>

          <div className="text-sm flex flex-col gap-2 items-start">
            <p className="flex gap-1 items-center">
              <Icon
                icon="hugeicons:hand-pointing-right-02"
                width="20"
                height="20"
                className="text-primary-400"
              />
              lifetime access with free updates.
            </p>
            <p className="flex gap-1 items-center">
              <Icon
                icon="hugeicons:hand-pointing-right-02"
                width="20"
                height="20"
                className="text-primary-400"
              />
              Step-by-step, hands-on project guidance.
            </p>
            <p className="flex gap-1 items-center">
              <Icon
                icon="hugeicons:hand-pointing-right-02"
                width="20"
                height="20"
                className="text-primary-400"
              />
              Downloadable resources and source code.
            </p>
            <p className="flex gap-1 items-center">
              <Icon
                icon="hugeicons:hand-pointing-right-02"
                width="20"
                height="20"
                className="text-primary-400"
              />
              Quizzes to test your knowledge.
            </p>
            <p className="flex gap-1 items-center">
              <Icon
                icon="hugeicons:hand-pointing-right-02"
                width="20"
                height="20"
                className="text-primary-400"
              />
              Certificate of completion.
            </p>
            <p className="flex gap-1 items-center">
              <Icon
                icon="hugeicons:hand-pointing-right-02"
                width="20"
                height="20"
                className="text-primary-400"
              />
              Quizzes to test your knowledge.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CourseID;
