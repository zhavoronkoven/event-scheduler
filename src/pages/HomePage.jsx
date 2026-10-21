import { EventList } from "@/components";

const HomePage = () => {
  return (
    <>
      <h1 className="h1 py-10 md:py-12 lg:py-14 xl:py-18 2xl:py-24 text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Make room for something happening</h1>
      <div>
        <div>Coming up</div>
        <div></div>
        <div></div>
      </div>
      <EventList />
    </>
  );
};

export default HomePage;
