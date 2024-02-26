import { useContext, useEffect, useState } from "react";
import PostLink from "./PostLink";
import CurrentUserContext from "../../contexts/current-user-context";

export default function DisplayPosts({ fetchPosts, posts, users }) {
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Sort posts by date in descending order (most recent first)
  const sortedPosts = posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <>
      <h1 id="postsHeader">Posts</h1>
      <ul className="postsList">
        {sortedPosts.map((post) => {
          const user = users.find((u) => u.id === post.user_id);

          const createdAtDate = new Date(post.created_at);
          const formattedDate = createdAtDate.toLocaleString();

          return (
            <li key={post.id} className="postItem">
              <strong className="postUser">{user && user.username}</strong> - <span className="postDate">{formattedDate}</span>
              <br />
              <PostLink post={post} />
              <br />
              <p className="postDescription">{post.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
