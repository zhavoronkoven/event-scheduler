import { HiArrowSmallRight } from "react-icons/hi2";

const EventCard = ({ event }) => {
  const { title, description, date } = event;

  const eventsDate = new Date(date);

  return (
    <li className="card bg-base-100 card-xs shadow-sm">
      <div className="card-body">
        <div className="flex gap-2">
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
          <p>{eventsDate.toLocaleDateString()}</p>
        </div>
        <div className="card-actions justify-end">
          <HiArrowSmallRight />
        </div>
      </div>
    </li>
  );
};

export default EventCard;
