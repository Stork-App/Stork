import { fetchHandler, getPostOptions, getPatchOptions, basicFetchOptions } from "../utils";

const baseUrl = '/api/logs';

export const createLog = async ({mood, abd_pain, back_pain, nausea, fatigue, user_id}) => (
  fetchHandler(baseUrl, getPostOptions({mood, abd_pain, back_pain, nausea, fatigue, user_id}))
);

export const getUserLogs = async (user_id) => {
  const [logs] = await fetchHandler(`${baseUrl}/users/${user_id}`);
  return logs || [];
};

export const getLogAvg = async (user_id) => fetchHandler(`${baseUrl}/avg/user/${user_id}`);

export const updateLog = async ({mood, abd_pain, back_pain, nausea, fatigue, id}) => {
  fetchHandler(`${baseUrl}/${log_id}`, getPatchOptions({mood, abd_pain, back_pain, nausea, fatigue, id}))
};

