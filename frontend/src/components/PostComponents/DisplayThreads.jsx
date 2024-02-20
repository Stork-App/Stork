import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThreads } from "../../adapters/thread-adapter";

export default function DisplayThreads() {
  const [postThreads, setPostThreads] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadThreads = async () => {
      const [threads, error] = await getThreads(id);
      if (error) return setErrorText(error.message);
      setPostThreads(threads);
    };

    loadThreads();
  }, [id]);

  const formatCreatedAt = (createdAt) => {
    const timestamp = new Date(createdAt);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return timestamp.toLocaleDateString(undefined, options);
  };

  if (!postThreads && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  return (
    <>
      <h1>Comments</h1>

      {postThreads.map((thread) => (
        <li key={thread.id}>{thread.comment}</li>
      ))}

    </>
  );
}
