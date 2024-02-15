import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/threads";

export const createThread = async ({ user_id, post_id, comment }) =>
  fetchHandler(baseUrl, getPostOptions({ user_id, post_id, comment }));

export const getAllThreads = async () => {
  const [threads] = await fetchHandler(baseUrl);
  return threads || [];
};

export const getThread = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const getThreads = async (post_id) => { 
  return await fetchHandler(`${baseUrl}/${post_id}`)
};