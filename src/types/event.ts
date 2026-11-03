export type EventItemType = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  latitude: number | null;
  longitude: number | null;
  organizerId: number;
};