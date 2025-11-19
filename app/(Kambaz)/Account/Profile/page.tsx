"use client";

import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3">

      <Form.Group className="mb-2">
        <Form.Control defaultValue="alice" id="wd-username" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control defaultValue="123" id="wd-password" type="password" placeholder="password" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control defaultValue="Alice" id="wd-firstname" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control defaultValue="Wonderland" id="wd-lastname" placeholder="Last Name" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control defaultValue="2000-01-01" id="wd-dob" type="date" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control defaultValue="alice@wonderland.com" id="wd-email" type="email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select id="wd-role" defaultValue="USER">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
      </Form.Group>

      <Button variant="danger" className="w-100 mb-2">
        Signout
      </Button>

      <Link href="/Account/Signin" id="wd-signin-link">Signin</Link>
    </div>
  );
}

