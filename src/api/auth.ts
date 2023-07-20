// Import the `fetchApi` function from "./index".

import { fetchApi } from "./index";

// Function to perform user login.
// It takes an email and password as input and returns a Promise that resolves to the login response.
// The `email` and `password` parameters are used to construct the request body as JSON data.
// The `fetchApi` function is called with the appropriate endpoint and request options to perform the POST request for login.
// The response will contain the login information.
export function login(email: string, password: string) {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  return fetchApi("/auth/login", options);
}

// Function to perform user sign up.
// It takes a `signUpData` object as input containing user sign up information and returns a Promise that resolves to the sign-up response.
// The `signUpData` parameter is used to construct the request body as JSON data.
// The `fetchApi` function is called with the appropriate endpoint and request options to perform the POST request for sign up.
// The response will contain the sign-up information.
export function signUp(signUpData: {}) {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signUpData),
  };
  return fetchApi("/auth/signup", options);
}
