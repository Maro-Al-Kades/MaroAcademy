"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row w-full gap-4">
        <div className="flex items-center gap-3 bg-primary/10 w-full rounded-lg p-5">
          <Icon
            icon="hugeicons:user-account"
            width="45"
            height="45"
            className="text-primary"
          />
          <div className="flex flex-col gap-0 font-semibold text-lg">
            <p className="text-xl font-bold">14</p>
            <p>Total Enrolments</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-primary/10 w-full rounded-lg p-5">
          <Icon
            icon="hugeicons:elearning-exchange"
            width="45"
            height="45"
            className="text-primary"
          />
          <div className="flex flex-col gap-0 font-semibold text-lg">
            <p className="text-xl font-bold">8</p>
            <p>Total Courses</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-primary/10 w-full rounded-lg p-5">
          <Icon
            icon="hugeicons:money-send-circle"
            width="45"
            height="45"
            className="text-primary"
          />
          <div className="flex flex-col gap-0 font-semibold text-lg">
            <p className="text-xl font-bold">$245</p>
            <p>Total Earnings</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-primary">Latest Enrolments :</h2>

        <Table color="primary">
          <TableHeader>
            <TableColumn>Student Name</TableColumn>
            <TableColumn>Course Title</TableColumn>
            <TableColumn>Date</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
            <TableRow key="10">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>Build Text to image SaaS App in React JS</TableCell>
              <TableCell>22 Aug, 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
