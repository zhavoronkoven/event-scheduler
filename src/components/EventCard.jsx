import { getDateLabel } from "@/utils";

const EventCard = ({ event }) => {
  const { title, description, date, location } = event;

  const { eventDate, eventMonth, eventYear } = getDateLabel(date);

  return (
    <li className="group gap-es-gap m-0 grid grid-cols-1 p-0 py-8 md:grid-cols-[250px_1fr_250px_100px]">
      <div className="pr-4">
        <div className="flex items-baseline uppercase">
          <span className="h2 nodot mr-1.5">{eventDate}</span>
          <div className="flex flex-col">
            <span className="font-bold">
              {eventMonth} {eventYear}
            </span>
          </div>
        </div>
      </div>
      <div className="pr-4">
        <h3 className="mb-2">{title}</h3>
        <p>{description}</p>
      </div>
      <div>{location}</div>
      <div>
        <div class="bg-es-primary hidden h-10 w-10 items-center justify-center justify-self-end text-white opacity-0 group-hover:opacity-100 md:flex">→</div>
      </div>
    </li>
  );
};

export default EventCard;
