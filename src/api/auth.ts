// api/auth.ts
import { fetchApi } from "./index";

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
