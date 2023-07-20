// api/activities.ts
import { fetchApi } from "./index";
import { ActivityType } from "@/types/ActivityType";

export function fetchActivities(category: string): Promise<ActivityType[]> {
  return fetchApi(`/activity?category=${category}`, { method: "GET" });
}
