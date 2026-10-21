const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllEvents = async (controller) => {
  const response = await fetch(`${BASE_URL}/events`, { signal: controller.signal });

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await response.json();
  return data;
};

export const getUpcomingEvents = async (controller) => {
  const response = await fetch(`${BASE_URL}/events/upcoming`, { signal: controller.signal });

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming events");
  }

  const data = await response.json();
  return data;
};
