import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/posts";

export const createPost = async ({ user_id, title, description }) =>
  fetchHandler(baseUrl, getPostOptions({ user_id, title, description }));

export const getAllPosts = async () => {
  const [posts] = await fetchHandler(baseUrl);
  return posts || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);
