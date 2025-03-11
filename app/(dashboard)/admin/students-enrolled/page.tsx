"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

const StudentsEnrolledRoute = () => {
  return (
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
  );
};

export default StudentsEnrolledRoute;
