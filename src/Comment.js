import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { ButtonGroup, Button } from "react-bootstrap";

import "./Comment.css";

function Comment({ comment }) {
  console.log("empty", comment);

  return (
    <Card>
      <Card.Header>
        <Image src={require(`${comment.user.image.png}`)} roundedCircle />
        {comment.user.username}
        {comment.createdAt}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <p>{comment.content}</p>
        </Card.Title>
        <ButtonGroup vertical className="vertical-button-group">
          <Button>+</Button>
          <Button>{comment.score}</Button>
          <Button>-</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default Comment;
