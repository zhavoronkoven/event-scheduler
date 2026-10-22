import { EventList } from "@/components";

const HomePage = () => {
  return (
    <>
      <div className="border-b-es-outline gap-space-sm mono-meta text-es-label gap-es-gap mb-4 hidden items-center border-b pb-2 uppercase lg:flex">
        <span className="bg-es-accent inline-block h-2 w-2"></span>
        <span>[ Upcoming events ]</span>
      </div>
      <div className="mb-16 sm:w-2/3">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl">Make room for something happening</h1>
      </div>

      <EventList />
    </>
  );
};

export default HomePage;
