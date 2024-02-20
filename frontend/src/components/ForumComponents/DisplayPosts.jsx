import { useContext, useEffect, useState } from "react";
import PostLink from "./PostLink";
import { getAllPosts } from "../../adapters/post-adapter";
import CurrentUserContext from "../../contexts/current-user-context";

export default function DisplayPosts() {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  const formatCreatedAt = (createdAt) => {
    const timestamp = new Date(createdAt);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return timestamp.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <br />
            <PostLink post={post} />
            <br />
            {post.description}
          </li>
        ))}
      </ul>
    </>
  );
}
