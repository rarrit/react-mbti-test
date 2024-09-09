import { MBTI_API } from '@/instance/baseInstance';

export const getTestResults = async () => {
  const response = await MBTI_API.get("/mbti");
  return response.data;
};

export const createTestResult = async (resultData) => {
  await MBTI_API.post("/mbti", resultData)
};

export const deleteTestResult = async (id) => {
  await MBTI_API.delete(`/mbti${id}`)
};

export const updateTestResultVisibility = async (id, visibility) => {
  await MBTI_API.put(`/mbti${id}`, {visibility: !visibility})
};