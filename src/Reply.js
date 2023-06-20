import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function Reply({ reply }) {
  return (
    <Card key={reply.id}>
      <Card.Header>
        <Image src={require(`${reply.user.image.png}`)} roundedCircle />
        {reply.user.username}
        {reply.createdAt}
      </Card.Header>
      <Card.Body>
        <Card.Title>{reply.content}</Card.Title>
        {/* map and show reply on different component */}
        <Reply />
        {/* <Card.Text></Card.Text> */}
      </Card.Body>
    </Card>
  );
}

export default Reply;
