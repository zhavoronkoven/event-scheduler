# Gather — Art-Directed Event Discovery Interface

Design exactly ONE page: the Home / Event Discovery page for Gather, a small event scheduling application.

Generate exactly three responsive views of this same page:
- Narrow: 390 px
- Medium: 768 px
- Wide: 1440 px

These are responsive adaptations of one design, not three concepts or three separate pages.

## Creative Direction

Do not create a conventional SaaS landing page or a generic component-library template.

Act as an independent digital art director designing a distinctive, contemporary editorial interface for an event discovery product.

Explore a visual language inspired by contemporary Swiss graphic design, independent cultural magazines, experimental typography, and carefully art-directed Webflow websites.

The design should feel intentional, distinctive, and memorable without being decorative for its own sake.

Use:
- Expressive typography and deliberate typographic scale.
- Unexpected but functional alignment.
- Asymmetrical compositions where appropriate.
- Strong use of negative space.
- Thin rules and precise grid relationships.
- Prominent dates as visual anchors.
- Carefully controlled contrast.
- A small, distinctive color palette.
- Editorial rhythm instead of repetitive UI cards.

Do not simply assemble familiar website sections from a component library.

Avoid the conventional combination of a centered headline, a generic subtitle, a search bar, three rounded cards, and a standard footer.

Do not use gradients, glassmorphism, floating blobs, generic illustrations, decorative photographs, or excessive rounded rectangles.

## Strict Data Contract

An event contains exactly these fields:

```json
{
  "id": 1,
  "title": "Event Title",
  "description": "Some Description for the Event",
  "date": "2026-10-12T20:12:25.340Z",
  "location": "Schloßbezirk 10, 76131 Karlsruhe",
  "latitude": 8.404746955649602,
  "longitude": 49.01438194665317,
  "organizerId": 1,
  "createdAt": "2026-10-12T20:12:25.340Z",
  "updatedAt": "2026-10-12T20:12:25.340Z"
}
```

This schema is the source of truth.

The interface may display:
- `title`
- `description`
- `date`
- `location`

The `id` identifies the event for navigation.

The remaining fields are technical metadata and should not be displayed in the event listing.

IMPORTANT:
- Events have NO photographs or image URLs.
- Do not invent event images, thumbnails, cover images, category labels, prices, ratings, attendee counts, organizers' names, or other unsupported fields.
- Do not add category filters because no category field exists.
- Do not display coordinates, organizer IDs, or technical timestamps.
- Do not invent event information to make the design look richer.
- Use only the supplied sample event data and its actual fields.

## Main Design Challenge: Events Without Images

Create a compelling visual hierarchy using typography and structured information alone.

The date should become an important visual element, not a tiny metadata label.

Explore possibilities such as:
- Large typographic dates integrated into the event row.
- Distinctive date blocks without conventional card backgrounds.
- Oversized event titles.
- Editorial dividers separating events.
- Asymmetric title and metadata columns on desktop.
- A compact, readable vertical rhythm on mobile.
- Strong typographic contrast between event titles, descriptions, dates, and locations.

These are creative directions, not a rigid layout specification. Choose a coherent composition rather than combining every idea.

The design must remain easy to scan and practical to implement.

## Page Content

Brand: Gather

Navigation:
- Explore
- Create Event
- Sign In
- Sign Up

Keep navigation restrained and integrate it into the overall art direction. Adapt it to mobile without allowing the header to dominate the screen.

Introductory headline:
"Make room for something happening."

Supporting text:
"Discover events worth showing up for."

Avoid a large, conventional SaaS hero. The introduction should feel integrated into the editorial composition and lead naturally into the event listing.

Main section title:
"Coming up"

Use these three events as sample content:

Event 1:
- Title: Product & Design Meetup
- Description: Connect with designers and product thinkers to exchange ideas and experiences.
- Date: 22 October 2026, 18:30
- Location: Koblenz, Germany

Event 2:
- Title: Creative Coding Workshop
- Description: Explore creative coding techniques and build something interactive.
- Date: 25 October 2026, 14:00
- Location: Bonn, Germany

Event 3:
- Title: Future of Web Development
- Description: Discuss emerging tools, modern workflows, and the future of building for the web.
- Date: 29 October 2026, 19:00
- Location: Cologne, Germany

These are presentation placeholders, not additional API fields.

Do not add other event attributes.

## Layout by Viewport

### Narrow — 390 px

Design for mobile first.

- Prioritize the event title, date, and location.
- Use a compact navigation.
- Keep content within the viewport.
- Arrange event information vertically or in a carefully balanced compact row.
- Use typography and separators instead of image-led cards.
- Avoid tiny labels and excessive indentation.
- No horizontal scrolling.

The page should feel designed for a phone, not like a desktop page squeezed into a narrow screen.

### Medium — 768 px

Recompose the same content to take advantage of additional space.

- Introduce a more expressive editorial grid.
- Give dates and event titles room to breathe.
- Use deliberate alignment and consistent spacing.
- Avoid leaving awkward empty areas.
- Preserve readability and a clear navigation hierarchy.

### Wide — 1440 px

Use a sophisticated editorial composition.

- Center the main content within a considered maximum-width container.
- Experiment with asymmetric columns and generous negative space.
- Make event dates and titles visually prominent.
- Align event metadata precisely.
- Avoid three-column grids of generic cards.
- Make the composition feel custom-designed rather than assembled from standard SaaS blocks.

The three views must share the same visual identity while using layouts appropriate to their respective widths.

## Functional Scope

This is the public event listing page for a React application.

The actual implementation will:
- Fetch events from `GET /api/events`.
- Sort events chronologically, earliest first.
- Render event information from the API response.
- Navigate to `/events/:id` when an event is selected.
- Provide navigation links to Create Event, Sign In, and Sign Up.

Do not design the other routes.

Do not add search, filtering, pagination, favorites, ticket booking, RSVP, maps, or other functionality unless it is essential to the stated requirements. Keep the interface focused on discovering and opening events.

## Implementation Constraints

The design will be implemented with React, Vite, React Router, and Tailwind CSS.

Use:
- CSS Grid and Flexbox.
- Standard responsive breakpoints.
- Reusable event-list elements.
- Flexible text containers.
- Simple borders and separators.
- Standard typography and spacing utilities.

Avoid:
- Complex overlapping layers.
- Absolute positioning for core layout.
- Intricate animation.
- Custom graphical elements requiring substantial CSS.
- Layouts dependent on fixed heights.
- Components whose appearance relies on unavailable event data.

Originality should come from art direction and composition, not implementation complexity.

## Output Rules — Strict

Produce exactly three views of ONE page:
1. 390 px mobile.
2. 768 px tablet.
3. 1440 px desktop.

Do not create alternative concepts or extra pages.

Do not invent additional data fields or features.

Do not use photographs anywhere in the event list.

Do not default to a generic SaaS template or standard rounded-card grid.

Prioritize visual originality, typographic sophistication, accurate data representation, responsive usability, and straightforward Tailwind CSS implementation.