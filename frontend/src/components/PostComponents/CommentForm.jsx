import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CurrentUserContext from "../../contexts/current-user-context";
import { createThread } from "../../adapters/thread-adapter";

export default function CommentForm({ fetchComments }) {
  const { id } = useParams();
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");

    try {
      const formData = new FormData(event.target);
      const val = Object.fromEntries(formData);

      const [post, error] = await createThread({
        user_id: currentUser.id,
        post_id: id,
        comment: val.text,
      });

      if (error) {
        setErrorText("Error posting comment. Please try again.");
      } else {
        console.log("Comment posted successfully:", post);
        event.target.reset();
        fetchComments();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorText("An unexpected error occurred. Please try again.");
    }
  };

  if (!currentUser) {
    return <p className="login-prompt" id="loginPrompt">Please log in to post comments.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="comment-form" id={`commentForm`} aria-labelledby="commentFormLabel">
        <label htmlFor="text" className="comment-label" id="commentLabel">Comment:</label>
        <textarea id="text" name="text" autoComplete="text" className="comment-textarea" />
        <button type="submit" className="comment-submit-btn">Post</button>
      </form>
      {errorText && <p className="error-text" id="commentFormError" style={{ color: "red" }}>{errorText}</p>}
    </>
  );
}
