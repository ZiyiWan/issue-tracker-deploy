import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
    color: "red" | "violet" | "green";
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN", color: "red" },
    {
      label: "In-Progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
      color: "violet",
    },
    { label: "Closed Issues", value: closed, status: "CLOSED", color: "green" },
  ];
  return (
    <Flex gap="3">
      {containers.map((container) => (
        <Card key={container.label}>
          <Flex direction="column" gap="1">
            {" "}
            <Link
              href={`/issues/list?status=${container.status}`}
              className="text-slate-400 text-sm font-medium"
            >
              {container.label}
            </Link>
            <Text size="6" className="font-bold" color={container.color}>
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
