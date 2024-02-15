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

  if (!postThreads && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  return (
    <>
      <h1>Comments</h1>

      {postThreads.map((thread) => (
        <p key={thread.id}>{thread.comment}</p>
      ))}

    </>
  );
}
