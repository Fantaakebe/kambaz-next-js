"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-3">
      <h1>Sign in</h1>

      <Form.Group className="mb-2">
        <Form.Control
          id="wd-username"
          placeholder="username"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          id="wd-password"
          placeholder="password"
          type="password"
        />
      </Form.Group>

      <Link id="wd-signin-btn" href="/Account/Profile">
        <Button className="btn-primary w-100 mb-2">Signin</Button>
      </Link>

      <Link id="wd-signup-link" href="/Account/Signup">
        Signup
      </Link>
    </div>
  );
}

