import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThreads } from "../../adapters/thread-adapter";
import { getAllUsers } from "../../adapters/user-adapter";

export default function DisplayThreads() {
  const [postThreads, setPostThreads] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadThreads = async () => {
      const [threads, error] = await getThreads(id);
      if (error) return setErrorText(error.message);
      setPostThreads(threads);

      const userIds = Array.from(new Set(threads.map((thread) => thread.user_id)));

      const usersData = await getAllUsers(userIds);

      const usersArray = Array.isArray(usersData) ? usersData : [usersData];

      setUsers(usersArray);
    };

    loadThreads();
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
