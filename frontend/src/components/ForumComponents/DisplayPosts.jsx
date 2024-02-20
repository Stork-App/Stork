import { useContext, useEffect, useState } from "react";
import PostLink from "./PostLink";
import { getAllPosts } from "../../adapters/post-adapter";
import CurrentUserContext from "../../contexts/current-user-context";
import { getAllUsers } from "../../adapters/user-adapter";

export default function DisplayPosts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setPosts(posts);
        const userIds = Array.from(new Set(posts.map((post) => post.user_id)));
        return getAllUsers(userIds);
      })
      .then(setUsers);
  }, []);

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          const user = users.find((u) => u.id === post.user_id);

          const createdAtDate = new Date(post.created_at);
          const formattedDate = createdAtDate.toLocaleString(); 

          return (
            <li key={post.id}>
              <strong>{user && user.username}</strong> - {formattedDate}
              <br />
              <PostLink post={post} />
              <br />
              {post.description}
            </li>
          );
        })}
      </ul>
    </>
  );
}
