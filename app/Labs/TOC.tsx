"use client";

import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function TOC() {
  return (
    <Nav variant="pills" id="wd-labs-toc">
      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab1">
          Lab 1
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab2">
          Lab 2
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={Link} href="/Labs/Lab3">
          Lab 3
        </Nav.Link>
      </Nav.Item>

      {/* add more labs if your professor wants them */}
    </Nav>
  );
}





