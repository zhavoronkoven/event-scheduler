import EventCalendar from "./EventCalendar";

const CalendarModal = ({ events, toggleModal }) => {
  const handerOverlayClick = (e) => e.target === e.currentTarget && toggleModal();
  return (
    <div onClick={(e) => handerOverlayClick(e)} className="bg-scrim fixed inset-0 z-50 flex place-content-center items-center justify-center backdrop-blur-md sm:items-center sm:p-4">
      <div className="bg-es-background/40 relative rounded-2xl p-10">
        <EventCalendar events={events} className="block" />
        <button className="border-es-outline text-es-label hover:border-es-accent hover:text-es-accent absolute top-2 right-2 size-10 cursor-pointer place-items-center rounded-full border backdrop-blur-lg transition-[background-color,rotate] duration-300 ease-out" type="button" aria-label="Schließen" onClick={toggleModal}>
          x
        </button>
      </div>
    </div>
  );
};

export default CalendarModal;
