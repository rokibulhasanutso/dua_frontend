import { BASE_URL } from "./api.config";

const headers = {
  "Content-Type": "application/json",
};

export const getFetch = async (endpoint) => {
  const url = `${BASE_URL}/${endpoint}`;

  const data = await fetch(url, { headers });
  return data.json();
};
