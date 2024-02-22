import { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/current-user-context";
import { createPost } from "../../adapters/post-adapter";

export default function PostForm({ fetchPosts }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");

    try {
      const formData = new FormData(event.target);
      const title = formData.get("title");
      const comment = formData.get("text");

      await createPost({
        user_id: currentUser.id,
        title: title,
        description: comment,
      });

      event.target.reset(); // Reset the form here
      fetchPosts();
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
      <form onSubmit={handleSubmit} id="postForm" className="postForm" aria-labelledby="input-text">
        <div className="formField">
          <label htmlFor="title" className="formLabel">Title:</label>
          <textarea id="title" name="title" className="formInput" autoComplete="title" />
        </div>

        <div className="formField">
          <label htmlFor="text" className="formLabel">Comment:</label>
          <textarea id="text" name="text" className="formInput" autoComplete="text" />
        </div>

        <button type="submit" className="submitButton">Post</button>
      </form>
      {errorText && <p className="errorText" style={{ color: "red" }}>{errorText}</p>}
    </>
  );
}
