import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../adapters/post-adapter";


export default function DisplayPost() {
    const [forumPost, setForumPost] = useState(null);
    const [errorText, setErrorText] = useState(null);
    const { id } = useParams();
    
  useEffect(() => {
    const loadPost = async () => {
      const [post, error] = await getPost(id);
      if (error) return setErrorText(error.message);
      setForumPost(post);
    };

    loadPost();
  }, [id]);

  if (!forumPost && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

    return <>

       <h1>{forumPost.title}</h1>
       <h1>{forumPost.description}</h1>

    </>
}