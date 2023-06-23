import React from "react";
import data from "./data//data.json";
import Comment from "./Comment";
import NewComment from "./NewComment";

const CommentList = () => {
  return (
    <div>
      {data.comments.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <Comment comment={data} score={data.score} />
            {data.replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                marginleft={"30px"}
                score={reply.score}
              />
            ))}
          </React.Fragment>
        );
      })}
      <NewComment />
    </div>
  );
};
export default CommentList;
