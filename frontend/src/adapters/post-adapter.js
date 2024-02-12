import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = '/api/posts';

export const createPost = async ({ user_id, title }) => (
    fetchHandler(baseUrl, getPostOptions({ user_id, title }))
  );
  
  export const getAllPosts = async () => {
    const [posts] = await fetchHandler(baseUrl);
    return posts || [];
  };

  
  export const getPosts = async (id) => fetchHandler(`${baseUrl}/${id}`);