import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}
const statusMaps: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "OPEN", color: "red" },
  IN_PROGRESS: { label: "IN PROGRESS", color: "violet" },
  CLOSED: { label: "CLOSED", color: "green" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMaps[status].color}>{statusMaps[status].label}</Badge>
  );
};

export default IssueStatusBadge;
