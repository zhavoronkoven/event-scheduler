const getDateLabel = (date) => {
  const eventFullDate = new Date(date);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const eventDate = String(eventFullDate.getDate()).padStart(2, "0");
  const eventDay = days[eventFullDate.getDay()];
  const eventMonth = months[eventFullDate.getMonth()];
  const eventYear = eventFullDate.getFullYear();
  const eventHours = String(eventFullDate.getHours()).padStart(2, "0");
  const eventMinutes = String(eventFullDate.getMinutes()).padStart(2, "0");

  return { eventDate, eventDay, eventMonth, eventYear, eventHours, eventMinutes };
};

const getEventOrgDate = (createdAtDate) => {
  const eventOrgFullDate = new Date(createdAtDate);

  const eventOrgDate = eventOrgFullDate.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return eventOrgDate;
};

const toDateKey = (value) => {
  const d = new Date(value);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export { getDateLabel, getEventOrgDate, toDateKey };
