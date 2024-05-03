import Accordion from "react-bootstrap/Accordion";

const CommentsList = ({ comments = [] }) => {
  // console.log(comments);
  return (
    <Accordion defaultActiveKey={comments[0]}>
      {comments.map((comment, index) => (
        <Accordion.Item key={index} eventKey={index}>
          <Accordion.Header>comment# {index + 1}</Accordion.Header>
          <Accordion.Body>{comment}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CommentsList;
