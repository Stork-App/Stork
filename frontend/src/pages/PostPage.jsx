import { useState } from "react";
import CommentForm from "../components/PostComponents/CommentForm";
import DisplayPost from "../components/PostComponents/DisplayPost";
import DisplayThreads from "../components/PostComponents/DisplayThreads";
import { getThreads } from "../adapters/thread-adapter";
import { getAllUsers } from "../adapters/user-adapter";
import { useParams } from "react-router-dom";
import '../PostPage.css'

export default function PostPage() {
  const [postThreads, setPostThreads] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();

  const loadThreads = async () => {
    const [threads, error] = await getThreads(id);
    if (error) return setErrorText(error.message);
    setPostThreads(threads);

    const userIds = Array.from(
      new Set(threads.map((thread) => thread.user_id))
    );

    const usersData = await getAllUsers(userIds);

    const usersArray = Array.isArray(usersData) ? usersData : [usersData];

    setUsers(usersArray);
  };

  return (
    <>
      <DisplayPost />
      <DisplayThreads fetchComments={loadThreads} postThreads={postThreads} users={users}/>
      <CommentForm fetchComments={loadThreads} />
    </>
  );
}
