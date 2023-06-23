import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";
import axios from "axios";

const CommentList = () => {
  const [loadedComments, setLoadedComments] = useState();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responseData = await axios.get(
          "http://localhost:7614/api/comments"
        );
        setLoadedComments(responseData.data);
      } catch (err) {
        console.log("Error retrieving comments");
      }
    };
    fetchComments();
  }, []);

  return (
    <div>
      {loadedComments &&
        loadedComments.map((data) => {
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
