import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const generateQuiz = async (topic) => {
  try {
    const res = await axios.post(`${BASE_URL}/generate-quiz`, {
      topic,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};