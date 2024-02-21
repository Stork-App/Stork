import { useEffect, useState } from "react";

export default function DisplayThreads({fetchComments, postThreads, users, id}) {

  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    fetchComments()
  }, [id]);

  if (!postThreads && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  return (
    <>
      <h1>Comments</h1>
      <ul>
        {postThreads.map((thread) => {
          const user = users.find((u) => u.id === thread.user_id);
          const createdAtDate = new Date(thread.created_at);
          const formattedDate = createdAtDate.toLocaleString();

          return (
            <li key={thread.id}>
            
              <strong>{user && user.username}</strong> - {formattedDate}
              <br />
              {thread.comment}
            </li>
          );
        })}
      </ul>
    </>
  );
}
