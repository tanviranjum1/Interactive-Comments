import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { ButtonGroup, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import NewComment from "./NewComment";
import Form from "react-bootstrap/Form";

import DeleteModal from "./DeleteModal";
import { ReactComponent as Reply } from "./icons/icon-reply.svg";
import { ReactComponent as Edit } from "./icons/icon-edit.svg";
import { ReactComponent as Delete } from "./icons/icon-delete.svg";
import { ReactComponent as Plus } from "./icons/icon-plus.svg";
import { ReactComponent as Minus } from "./icons/icon-minus.svg";

import "./Comment.css";

function Comment({ comment, marginleft, score }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    console.log({ show });
  };

  const [edit, setEdit] = useState(false);
  const [reply, setReply] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleReply = () => {
    setReply(!reply);
  };

  let [val, setVal] = useState(score);
  const handleIncrement = () => {
    setVal(val + 1);
  };

  const handleDecrement = () => {
    setVal(val - 1);
  };

  return (
    <>
      <Card className="card" style={{ marginLeft: marginleft }}>
        <ButtonGroup vertical>
          <Button variant="default" onClick={handleIncrement}>
            <Plus />
          </Button>
          <Button variant="default">{val} </Button>
          <Button variant="default" onClick={handleDecrement}>
            <Minus />{" "}
          </Button>
        </ButtonGroup>
        <Card.Body>
          <Card.Title>
            <Image src={require(`${comment.user.image.png}`)} roundedCircle />
            <span className="user">
              {" "}
              {comment.user.username}
              {comment.user.username == "juliusomo" && (
                <Badge bg="primary">you</Badge>
              )}
            </span>
            <span>{comment.createdAt}</span>

            {comment.user.username === "juliusomo" ? (
              <div className="reply">
                <span onClick={handleEdit} className={edit ? "disabled" : ""}>
                  <Edit />
                  Edit
                </span>
                <span onClick={handleShow} className={edit ? "disabled" : ""}>
                  <Delete />
                  Delete
                </span>
              </div>
            ) : (
              <div className="reply" onClick={handleReply}>
                <Reply />
                Reply
              </div>
            )}
          </Card.Title>
          <Card.Text>
            {edit ? (
              <>
                <Form.Control
                  as="textarea"
                  placeholder="Add a comment"
                  value={comment.content}
                />
                <div className="text-end mt-3">
                  <Button onClick={handleEdit}>UPDATE</Button>
                </div>
              </>
            ) : (
              comment.content
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      {reply && <NewComment reply={reply} marginleft={marginleft} />}
      {show && <DeleteModal show={show} handleClose={handleClose} />}
    </>
  );
}

export default Comment;
