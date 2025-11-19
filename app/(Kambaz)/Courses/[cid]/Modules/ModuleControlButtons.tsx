"use client";

import { Button } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <span className="float-end">
      <Button
        id="wd-module-control-btn"
        variant="light"
        size="sm"
        className="border-0 text-secondary"
      >
        <BsThreeDotsVertical />
      </Button>
    </span>
  );
}

