import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createPost, getPostById, updatePost } from "../../service/postService";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Button, Card, Container, Form } from "react-bootstrap";
import MarkdownPreview from "@uiw/react-markdown-preview";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    preview: "",
    content: "",
    coverImg: "",
  });

  const getRawTags = (tags) => {
    console.log(tags);
    let rawTags = "";
    if (!tags) return rawTags;
    tags.forEach((tag) => {
      rawTags += tag;
      rawTags += " ";
    });
    rawTags = rawTags.slice(0, -1);
    formik.setFieldValue("rawTags", rawTags);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPostById(id);
      setPost(post.data);
      getRawTags(post.data.tags);
    };
    fetchPost();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: post.title,
      preview: post.preview,
      content: post.content,
      rawTags: "",
      coverImg: post.coverImg,
    },
    onSubmit: async (
      { title, preview, content, coverImg, rawTags },
      { resetForm }
    ) => {
      let tags = rawTags.split(" ");
      const updatedPost = {
        title: title,
        preview: preview,
        content: content,
        coverImg: coverImg,
        tags,
        userId: post.userId,
      };
      try {
        await updatePost(updatedPost, id);
        window.location = "/admin/posts";
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

export default EditPost;
