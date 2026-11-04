import { z } from "zod";

import { type EventItemType, EventListSchema } from "@/types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllEvents = async (controller: AbortController): Promise<EventItemType[]> => {
  const response = await fetch(`${BASE_URL}/events`, { signal: controller.signal });
  
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data: unknown = await response.json();
  const result = EventListSchema.safeParse(data);

  if (!result.success) { 
    console.error(z.prettifyError(result.error));
    throw new Error("Unexpected response from server");
  }

  return result.data;
};

export const getUpcomingEvents = async (controller: AbortController): Promise<EventItemType[]> => {
  const response = await fetch(`${BASE_URL}/events/upcoming`, { signal: controller.signal });

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming events");
  }

  const data: unknown = await response.json();
  const result = EventListSchema.safeParse(data);

  if (!result.success) { 
    console.error(z.prettifyError(result.error));
    throw new Error("Unexpected response from server");
  }

  return result.data;
};
