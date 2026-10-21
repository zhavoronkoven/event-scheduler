import { EventList } from "@/components";

const HomePage = () => {
  return (
    <>
      <div className="border-es-outline border-b py-3 md:text-xs lg:py-6 lg:text-base xl:py-8 xl:text-lg 2xl:py-10 2xl:text-xl">
        <span className="bg-es-accent m-0.5 inline-block h-1.5 w-1.5"></span> [ 01 / CULTURAL CALENDAR ] <span className="bg-es-label m-0.5 inline-block h-1 w-1 rounded-full"></span> <span className="text-es-label">PUBLIC CATALOGUE</span>
      </div>

      <h1 className="h1 py-10 text-5xl md:py-12 md:text-6xl lg:py-14 lg:text-7xl xl:py-18 xl:text-8xl 2xl:py-24">Make room for something happening</h1>
      {/* <h1 className="h1 py-10 text-5xl md:py-12 md:text-6xl lg:py-14 lg:text-7xl xl:py-18 xl:text-8xl 2xl:py-24 md:w-[35%]">Make room for something happening</h1> */}

      <div className="border-es-outline flex w-full border-t border-b py-3 md:justify-between md:border-b-0 lg:py-6 xl:py-8 2xl:py-10">
        <div className="flex">
          <div className="uppercase md:text-xs lg:text-base xl:text-lg 2xl:text-xl">
            <span className="bg-es-accent m-0.5 inline-block h-1.5 w-1.5"></span> Coming up
          </div>
          <div className="text-es-label ml-14 hidden uppercase md:inline-block md:text-xs lg:ml-26 lg:text-base xl:ml-30 xl:text-lg 2xl:ml-48 2xl:text-xl">Title & Description</div>
        </div>
        <div className="text-es-label hidden place-content-end uppercase md:inline-block md:text-xs lg:text-base xl:text-lg 2xl:text-xl">Location</div>
      </div>

      <EventList />
    </>
  );
};

export default HomePage;
