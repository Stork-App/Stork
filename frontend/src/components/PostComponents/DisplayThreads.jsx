import { useEffect, useState } from "react";

export default function DisplayThreads({ fetchComments, postThreads, users, id }) {

  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    fetchComments();
  }, [id]);

  if (!postThreads && !errorText) return null;
  if (errorText) return <p className="error-text" id="commentErrorText">{errorText}</p>;

  return (
    <>
      <h1 className="comments-header" id="commentsHeader">Comments</h1>
      <ul className="comments-list" id={`commentsList-${id}`}>
        {postThreads.map((thread) => {
          const user = users.find((u) => u.id === thread.user_id);
          const createdAtDate = new Date(thread.created_at);
          const formattedDate = createdAtDate.toLocaleString();

          return (
            <li className="comment-item" id={`commentItem`} key={thread.id}>
              <strong className="comment-user" id={`commentUser`}>{user ? user.username : "Unknown User"}</strong>
              <span className="comment-date" id={`commentDate`}> - {formattedDate}</span>
              <br />
              <p className="comment-text" id={`commentText`}>{thread.comment}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
