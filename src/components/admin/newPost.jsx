import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import MarkdownPreview from "@uiw/react-markdown-preview";

const NewPost = () => {
  const formik = useFormik({
    initialValues: {
      content: "fe",
    },
  });
  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="container-fluid text-start">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tags</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Preview</Form.Label>
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                onChange={formik.handleChange}
                style={{ height: "100px" }}
              />
            </Form.Group>

            <MarkdownPreview source={formik.values.content} />

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewPost;
