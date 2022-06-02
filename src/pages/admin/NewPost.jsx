import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { getCurrentUser } from "../../service/authService";
import { createPost } from "../../service/postService";
import { toast } from "react-toastify";

const NewPost = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      preview: "",
      content: "",
      rawTags: "",
      coverImg: "",
    },
    onSubmit: async (
      { title, preview, content, coverImg, rawTags },
      { resetForm }
    ) => {
      const user = getCurrentUser();
      let tags = rawTags.split(" ");
      const newPost = {
        title: title,
        preview: preview,
        content: content,
        coverImg: coverImg,
        tags,
        userId: user._id,
      };
      console.log(newPost);
      try {
        await createPost(newPost);
        resetForm();
        toast("The new post has been created.");
      } catch (e) {
        toast("Error occurred.");
      }
    },
    enableReinitialize: true,
  });
  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="container-fluid text-start">
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cover image Url</Form.Label>
              <Form.Control
                type="text"
                name="coverImg"
                onChange={formik.handleChange}
                value={formik.values.coverImg}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                name="rawTags"
                onChange={formik.handleChange}
                value={formik.values.rawTags}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Preview</Form.Label>
              <Form.Control
                as="textarea"
                name="preview"
                onChange={formik.handleChange}
                value={formik.values.preview}
                style={{ height: "200px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                name="content"
                onChange={formik.handleChange}
                value={formik.values.content}
                style={{ height: "200px" }}
              />
            </Form.Group>
            <div>
              <p>Markdown Preview</p>
              <MarkdownPreview
                className="mb-3"
                source={formik.values.content}
              />
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button
              variant="primary"
              className="mx-2"
              onClick={() => {
                window.location = "/admin/posts";
              }}
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NewPost;
