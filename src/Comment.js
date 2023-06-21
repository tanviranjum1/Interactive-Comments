import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { ButtonGroup, Button } from "react-bootstrap";
import "./Comment.css";
import { ReactComponent as Reply } from "./icons/icon-reply.svg";

function Comment({ comment, marginleft }) {
  return (
    <Card className="card" style={{ marginLeft: marginleft }}>
      <ButtonGroup vertical>
        <Button>+</Button>
        <Button>{comment.score}</Button>
        <Button>-</Button>
      </ButtonGroup>
      <div>
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>
            <div className="user-part">
              <Image src={require(`${comment.user.image.png}`)} roundedCircle />
              <span className="user"> {comment.user.username}</span>
              <span>{comment.createdAt}</span>
            </div>
            <div className="reply">
              <Reply />
              Reply
            </div>
          </Card.Title>
          <Card.Text>{comment.content}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Comment;
