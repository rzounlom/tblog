import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  // console.log({ post });
  return (
    <Card className="post-card">
      <Card.Img variant="top" src={`${post.imgUrl}`} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.story.slice(0, 60)}...</Card.Text>
        <Link to={`/posts/${post.id}`}>
          <Button variant="outline-primary">Read full story</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
