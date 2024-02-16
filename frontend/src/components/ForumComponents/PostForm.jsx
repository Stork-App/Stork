import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CurrentUserContext from "../../contexts/current-user-context";
import { createThread } from "../../adapters/thread-adapter";

export default function PostForm() {
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
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorText("An unexpected error occurred. Please try again.");
    }
  };

  if (!currentUser) {
    return <p>Please log in to post comments.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} aria-labelledby="input-text">
        <label htmlFor="text">Comment:</label>
        <textarea id="text" name="text" autoComplete="text" />
        <button type="submit">Post</button>
      </form>
      {errorText && <p style={{ color: "red" }}>{errorText}</p>}
    </>
  );
}
