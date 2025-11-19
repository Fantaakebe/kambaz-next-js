"use client";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-3">
      <h1>Signup</h1>

      <Form.Group className="mb-2">
        <Form.Control placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control placeholder="password" type="password" />
      </Form.Group>

      <Button className="btn-primary w-100 mb-2">Signup</Button>

      <Link href="/Account/Signin">Signin</Link>
    </div>
  );
}
