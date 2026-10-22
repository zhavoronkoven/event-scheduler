import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";

import { getDateLabel, toDateKey } from "@/utils";

let saved = { date: null, month: null };

const EventCalendar = ({ events }) => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(saved.date);
  const [month, setMonth] = useState(saved.month ?? new Date());

  const eventsDates = (events ?? []).map((event) => new Date(event.date));
  const dayEvents = selectedDate ? (events ?? []).filter((event) => toDateKey(event.date) === selectedDate) : [];

  useEffect(() => {
    saved = { date: selectedDate, month };
  }, [selectedDate, month]);

  function handlerDayClick(date) {
    const key = toDateKey(date);
    const found = (events ?? []).filter((event) => toDateKey(event.date) === key);

    if (found.length === 0) {
      setSelectedDate(null);
      return;
    }

    saved = { date: key, month: date };
    setSelectedDate(key);
    setMonth(date);

    if (found.length === 1) {
      navigate(`/events/${found[0].id}`);
    }
  }

  return (
    <div className="flex flex-col">
      <DayPicker
        mode="single"
        selected={selectedDate ? new Date(selectedDate + "T00:00") : undefined}
        month={month}

        onMonthChange={setMonth}
        onDayClick={handlerDayClick}

        showOutsideDays
        modifiers={{ hasEvent: eventsDates }}
        modifiersClassNames={{ hasEvent: "[&_button]:bg-es-accent/20! [&_button]:rounded-full" }}
        className="hidden [--rdp-accent-color:var(--color-es-accent)]! [--rdp-day-height:36px]! [--rdp-day-width:38px]! md:block lg:[--rdp-day-height:46px]! lg:[--rdp-day-width:50px]! xl:[--rdp-day-height:56px]! xl:[--rdp-day-width:56px]! 2xl:[--rdp-day-height:86px]! 2xl:[--rdp-day-width:68px]!"
      />
      {dayEvents.length > 1 && (
        <ul className="hidden flex-col gap-2 py-3 md:flex">
          {dayEvents.map((event) => (
            <li key={event.id} className="border-es-label border-b p-2">
              <Link to={`/events/${event.id}`} className="text-es-label hover:text-es-accent flex justify-between font-semibold">
                <span>
                  <span className="bg-es-accent mr-2 mb-0.5 inline-block h-2 w-2 items-center rounded-full md:mr-1.5 lg:h-2 lg:w-2"></span>
                  {event.title}
                </span>
                <span className="md:text-es-primary lg:text-xl xl:text-2xl">{`${getDateLabel(event.date).eventHours}:${getDateLabel(event.date).eventMinutes}`}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventCalendar;
