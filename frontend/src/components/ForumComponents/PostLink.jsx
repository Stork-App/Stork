import { Link } from "react-router-dom";

export default function PostLink({ post }) {
  return <Link to={`/posts/${post.id}`}>{post.title}</Link>;
}
