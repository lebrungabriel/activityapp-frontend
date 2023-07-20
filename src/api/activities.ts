// Import the `fetchApi` function and `ActivityType` type from "./index" and "@/types/ActivityType" respectively.

import { fetchApi } from "./index";
import { ActivityType } from "@/types/ActivityType";

// Function to fetch activities based on a specified category.
// It takes a category as input and returns a Promise that resolves to an array of `ActivityType` objects.
export function fetchActivities(category: string): Promise<ActivityType[]> {
  // The `fetchApi` function is called with the appropriate endpoint and method.
  // The `category` parameter is used to filter activities based on the provided category.
  // The fetchApi function makes a GET request to the specified endpoint with the provided category as a query parameter.
  // The response will be in the form of an array of `ActivityType` objects.
  return fetchApi(`/activity?category=${category}`, { method: "GET" });
}
