import React from "react";
import data from "./data//data.json";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <div>
      {data.comments.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <Comment comment={data} />
            {data.replies.map((reply) => (
              <Comment comment={reply} key={reply.id} marginleft={"30px"} />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default CommentList;
