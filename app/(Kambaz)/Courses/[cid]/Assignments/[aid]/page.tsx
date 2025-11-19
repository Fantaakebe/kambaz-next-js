"use client";

import { Form, Button } from "react-bootstrap";

export default function EditAssignment() {
  return (
    <div id="wd-edit-assignment" className="p-3">

      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control id="wd-assignment-name" placeholder="A1" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          id="wd-description"
          as="textarea"
          rows={6}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Points</Form.Label>
        <Form.Control id="wd-points" type="number" placeholder="100" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Due Date</Form.Label>
        <Form.Control id="wd-due-date" type="date" />
      </Form.Group>

      <div className="mt-3">
        <Button variant="secondary" className="me-2">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>

    </div>
  );
}

  