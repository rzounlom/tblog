import "./PostList.css";

import { Col, Container, Row } from "react-bootstrap";

import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  // console.log({ posts });
  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} lg={4} md={6}>
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
