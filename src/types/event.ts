import { z } from "zod";

export const EventItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  date: z.iso.datetime(),
  location: z.string(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  organizerId: z.number(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export const EventListSchema = z.array(EventItemSchema);

export type EventItemType = z.infer<typeof EventItemSchema>;


