// The base URL for the API.
const API_BASE_URL = "http://localhost:3000";

// Function to fetch data from the API.
// It takes two parameters: `endpoint`, which is the API endpoint to fetch data from, and `options`, which are the request options.
// The `endpoint` parameter is appended to the `API_BASE_URL` to construct the full API URL for the request.
// The `fetch` function is called with the constructed URL and the provided `options` to perform the API request.
// The function awaits the response from the API and checks if the response is not OK (status code other than 200-299).
// If the response is not OK, an error is thrown with the message "Network response was not ok".
// Otherwise, the response is parsed as JSON and returned as the result of the function.
export async function fetchApi(endpoint: string, options: RequestInit) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
