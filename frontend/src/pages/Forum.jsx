import { useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import { getAllUsers } from "../adapters/user-adapter";
import DisplayPosts from "../components/ForumComponents/DisplayPosts";
import PostForm from "../components/ForumComponents/PostForm";

export default function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const displayPostFunction = () => {
        getAllPosts()
        .then((posts) => {
          setPosts(posts);
          const userIds = Array.from(new Set(posts.map((post) => post.user_id)));
          return getAllUsers(userIds);
        })
        .then(setUsers);
    }
   

    return <>
    <DisplayPosts fetchPosts={displayPostFunction} posts={posts} users={users}/>
    <PostForm fetchPosts={displayPostFunction}/>
    </>
}