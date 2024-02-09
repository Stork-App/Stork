import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/logs';

export const createLog = async ({ mood, abd_pain, back_pain, nausea, fatigue, user_id }) => {
  console.log('hi');
  fetchHandler(baseUrl, getPostOptions({ mood, abd_pain, back_pain, nausea, fatigue, user_id }))
};

export const getAllLogs = async () => {
  const [logs] = await fetchHandler(baseUrl);
  return logs || [];
};

export const getLogs = async (id) => await fetchHandler(`${baseUrl}/${id}`);

export const getAvgLogs = async(id) => {
  const [avgs] = await fetchHandler(`${baseUrl}/avg/user/${id}`);
  console.log('hello')
  console.log(avgs)
  return avgs || [];
}
// export const updateUsername = async ({ id, username }) => (
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
// );
