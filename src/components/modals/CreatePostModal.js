import "./CreatePostModal.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { createPost } from "../../services/postsService";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useState } from "react";

// {
//   id: "1",
//   createdAt: "2023-04-13T01:00:52.546Z",
//   published: true,
//   author: "John Doe",
//   destination: "Paris, France",
//   imgUrl:
//     "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//   title: "A Weekend in Paris: The City of Lights",
//   comments: [
//     "Loved your article!",
//     "Paris is my dream destination.",
//     "Great tips for first-time visitors.",
//   ],
//   story:
//     "Discovering the charm of Parisian streets, from the majestic Eiffel Tower to the quaint cafes of Montmartre.",
// },

function CreatePostModal() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    author: "",
    destination: "",
    imgUrl: "",
    story: "",
  });

  const handleClose = () => {
    setPostData({
      title: "",
      author: "",
      destination: "",
      imgUrl: "",
      story: "",
    });
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postData);

    //alternative way to check if all fields are filled
    // if (!Object.values(postData).every((field) => field.length > 0)) {
    //   toast.error("Please fill in all fields");
    //   return;
    // }

    if (
      !postData.title ||
      !postData.author ||
      !postData.destination ||
      !postData.imgUrl ||
      !postData.story
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const data = {
      ...postData,
      published: false,
    };
    try {
      setLoading(true);
      await createPost(data);
      toast.success("Post created successfully");
      history.push("/posts");
    } catch (error) {
      console.error(error);
      toast.error("Error creating post");
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <div className="create-post-modal">
      <Button variant="primary" onClick={handleShow}>
        Create Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="The best vacation ever"
                value={postData.title}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                placeholder="John Doe"
                value={postData.author}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                name="destination"
                placeholder="Paris, France"
                value={postData.destination}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imgUrl"
                placeholder="https://..."
                value={postData.imgUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Story</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="story"
                value={postData.story}
                onChange={handleChange}
                required
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreatePostModal;
