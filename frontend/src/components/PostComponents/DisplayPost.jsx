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
    if (errorText) return <p className="error-text" id="errorText">{errorText}</p>;

    return (
        <>
            <div className="post-container" id={`postContainer`}>
                <h1 className="post-title" id="postTitle">{forumPost.title}</h1>
                <p className="post-description" id="postDescription">{forumPost.description}</p>
            </div>
        </>
    );
}
