import React from "react";
import me from "./images/avatars/image-juliusomo.png";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewComment = ({ reply, marginleft }) => {
  return (
    <Card style={{ marginLeft: marginleft }}>
      <Card.Body>
        <Row>
          <Col>
            {" "}
            <Image src={me} roundedCircle />
          </Col>
          <Col xs={9}>
            {" "}
            <Form.Control as="textarea" placeholder="Add a comment" />
          </Col>
          <Col>
            <Button>{reply ? "REPLY" : "SEND"}</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NewComment;
