import { API_URL } from "../config/api";

export const fetchFromApi = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
