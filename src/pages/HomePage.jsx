import { EventList, EventCalendar, CalendarModal } from "@/components";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const HomePage = () => {
  const [isModal, setModal] = useState(false);
  const [events, setEvents] = useState(null);

  const toggleModal = () => setModal((prev) => !prev);

  return (
    <>
      <div className="border-es-outline border-b py-3 md:text-xs lg:py-6 lg:text-base xl:py-8 xl:text-lg 2xl:py-10 2xl:text-xl">
        <span className="bg-es-accent m-0.5 inline-block h-1.5 w-1.5"></span> [ 01 / CULTURAL CALENDAR ] <span className="bg-es-label m-0.5 inline-block h-1 w-1 rounded-full"></span> <span className="text-es-label">PUBLIC CATALOGUE</span>
      </div>

      <div className="flex justify-between py-10 md:py-12 lg:py-14 xl:py-18 2xl:py-24">
        <h1 className="h1 text-5xl md:w-[45%] md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">Make room for something happening</h1>
        <div className="bg-es-outline hidden w-px md:block"></div>
        <EventCalendar events={events} className="hidden md:block" />
      </div>

      {/* <h1 className="h1 py-10 text-5xl md:py-12 md:text-6xl lg:py-14 lg:text-7xl xl:py-18 xl:text-8xl 2xl:py-24 md:w-[35%]">Make room for something happening</h1> */}

      <div className="border-es-outline flex w-full justify-between border-t border-b py-3 md:border-b-0 lg:py-6 xl:py-8 2xl:py-10">
        <div className="flex">
          <div className="uppercase md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
            <span className="bg-es-accent m-0.5 inline-block h-1.5 w-1.5"></span> Coming up
          </div>
          <div className="text-es-label ml-14 hidden uppercase md:inline-block md:text-xs lg:ml-26 lg:text-base xl:ml-30 xl:text-lg 2xl:ml-48 2xl:text-xl">Title & Description</div>
        </div>
        <button onClick={toggleModal} className="hover:text-es-accent flex place-content-end items-center justify-center gap-2 uppercase md:hidden md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
          Calendar <MdKeyboardArrowDown className="text-es-accent" />
        </button>
        <div className="text-es-label hidden place-content-end uppercase md:inline-block md:text-xs lg:text-base xl:text-lg 2xl:text-xl">Location</div>
      </div>
      {isModal && <CalendarModal events={events} toggleModal={toggleModal} />}
      <EventList events={events} setEvents={setEvents} />
    </>
  );
};

export default HomePage;
