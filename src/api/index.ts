// api/index.ts
const API_BASE_URL = "http://localhost:3000";

export async function fetchApi(endpoint: string, options: RequestInit) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
