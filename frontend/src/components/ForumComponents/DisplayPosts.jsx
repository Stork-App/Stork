import { useContext, useEffect, useState } from "react";
import PostLink from "./PostLink";
import { getAllPosts } from "../../adapters/post-adapter";
import CurrentUserContext from "../../contexts/current-user-context";
import { getAllUsers } from "../../adapters/user-adapter";

export default function DisplayPosts({fetchPosts, posts, users}) {
  
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    fetchPosts()
  }, []);



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
