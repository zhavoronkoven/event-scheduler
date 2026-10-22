import { HiArrowSmallRight } from "react-icons/hi2";
import { getDateLabel } from "@/utils";

const EventCard = ({ event }) => {
  const { title, description, date, location } = event;

  const { eventDate, eventMonth, eventYear, eventHours, eventMinutes } = getDateLabel(date);
  const shortMonth = eventMonth.substring(0, 3).toUpperCase();

  return (
    <li className="py-es-mobile xl:py-es-desktop text-es-label hover:bg-es-primary/2 md:border-t-es-outline container flex flex-col md:border-t md:py-8 lg:py-10 2xl:py-18">
      <div className="flex flex-col gap-4 md:flex-row md:gap-15 lg:gap-20 xl:justify-between">
        <time className="flex items-baseline justify-between gap-3 md:flex-col md:justify-start lg:min-w-32.5 xl:min-w-35">
          <div className="flex items-baseline gap-2 md:flex-col lg:flex-row">
            <div className="text-es-primary text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">{eventDate}</div>
            <div className="flex gap-2 lg:flex-col lg:gap-0">
              <div className="lg:text-es-primary lg:text-lg lg:font-medium">{shortMonth}</div>
              <div className="lg:text-lg">{eventYear}</div>
            </div>
          </div>

          <div className="md:text-es-primary lg:text-xl xl:text-2xl">{`${eventHours}:${eventMinutes}`}</div>
          {/* <div className="md:text-es-primary lg:text-xl xl:text-2xl"><span className="hidden md:inline-block text-es-label">at</span> {`${eventHours}:${eventMinutes}`}</div> */}
        </time>
        <div className="flex flex-col gap-2 md:max-w-sm lg:max-w-md xl:max-w-xl 2xl:max-w-2xl">
          <h2 className="text-es-primary text-2xl font-bold lg:text-3xl xl:text-4xl">{title}</h2>
          <p className="text-es-label text-sm md:text-base lg:text-lg xl:text-xl xl:leading-8">{description}</p>
        </div>

        <div className="border-y-es-outline text-es-primary md:text-es-label flex items-center justify-between border-y py-4 md:flex-col md:justify-between md:border-0 md:py-0 xl:flex-row xl:gap-20">
          <div className="md:text-es-primary text-end font-medium md:text-base md:font-normal lg:text-lg xl:max-w-38 xl:text-xl">
            <span className="bg-es-accent mr-2 mb-0.5 inline-block h-2 w-2 items-center rounded-full md:mr-1.5 lg:h-2 lg:w-2"></span>
            {location}
          </div>
          <HiArrowSmallRight className="text-es-label border-es-outline h-6 w-6 place-self-end border p-1 lg:h-9 lg:w-9 lg:p-2 xl:place-self-center" />
        </div>
      </div>
    </li>
  );
};

export default EventCard;
