"use client";

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";

const courses = [
  {
    id: "1234",
    code: "CS4550",
    title: "Web Development",
    description: "Client/server web apps using React and Node.js.",
    image: "/images/webdev.jpg"
  },
  {
    id: "1234",
    code: "CS3200",
    title: "Introduction to Databases",
    description: "Relational databases, SQL, and data modeling.",
    image: "/images/databases.jpg"
  },
  {
    id: "1234",
    code: "PSYC2320",
    title: "Stats in Psychology",
    description: "Quantitative methods and statistical reasoning.",
    image: "/images/psych-stats.jpg"
  },
  {
    id: "1234",
    code: "PSYC3402",
    title: "Social Psychology",
    description: "Human social behavior and interactions.",
    image: "/images/social-psych.jpg"
  },
  {
    id: "1234",
    code: "PSYC3508",
    title: "Behavioral Endocrinology",
    description: "Ethical reasoning and applied moral issues.",
    image: "/images/philosophy.jpg"
  },
  {
    id: "1234",
    code: "ACCT1201",
    title: "Financial Accounting",
    description: "Financial statements, analysis, and reporting.",
    image: "/images/accounting.jpg"
  }
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <Row xs={1} md={2} lg={3} className="g-4" id="wd-dashboard-courses">
        {courses.map((course, index) => (
          <Col key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img src={course.image} alt={course.title} />
              <Card.Body>
                <Card.Title>{course.code} – {course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Link href={`/Courses/${course.id}`}>
                  <Button variant="danger">Go</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}


