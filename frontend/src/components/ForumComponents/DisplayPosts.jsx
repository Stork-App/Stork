import { useEffect, useState } from "react";
import PostLink from "./PostLink";
import { getAllPosts } from "../../adapters/post-adapter";

export default function DisplayPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
      {
        posts.map((post) => <li key={post.id}><PostLink post={post}/>{post.description}</li>)
      }
    </ul>
    </>
  );
}
