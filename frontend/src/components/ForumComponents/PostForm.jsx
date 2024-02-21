import { useContext, useState, useRef } from "react";
import CurrentUserContext from "../../contexts/current-user-context";
import { createPost } from "../../adapters/post-adapter";

export default function PostForm({fetchPosts}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");

    try {
      const formData = new FormData(event.target);
      const title = formData.get("title");
      const comment = formData.get("text");

      const [post, error] = await createPost({
        user_id: currentUser.id,
        title: title,
        description: comment,
      });

      if (error) {
        setErrorText("Error creating post. Please try again.");
      } else {
        console.log("Post created successfully:", post);
        formRef.current.reset(); // Reset the form here
        fetchPosts()
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
      <form onSubmit={handleSubmit} aria-labelledby="input-text" ref={formRef}> {/* Add the ref here */}
        <label htmlFor="title">Title:</label> {/* Correct htmlFor attribute */}
        <textarea id="title" name="title" autoComplete="title" />

        <label htmlFor="text">Comment:</label>
        <textarea id="text" name="text" autoComplete="text" />

        <button type="submit">Post</button>
      </form>
      {errorText && <p style={{ color: "red" }}>{errorText}</p>}
    </>
  );
}
