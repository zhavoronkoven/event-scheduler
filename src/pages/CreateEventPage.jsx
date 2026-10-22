import { useState } from "react";
import { useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

const initialForm = {
  title: "",
  description: "",
  date: "",
  location: "",
  latitude: "",
  longitude: "",
};

const fields = [
  { key: "title", label: "Event title", type: "text", autoComplete: "off", placeholder: "Event Title" },
  { key: "date", label: "Date and time", type: "datetime-local", autoComplete: "off", placeholder: "" },
  { key: "location", label: "Location", type: "text", autoComplete: "street-address", placeholder: "Schloßbezirk 10, 76131 Karlsruhe" },
  { key: "latitude", label: "Latitude", type: "number", autoComplete: "off", placeholder: "8.404746955649602", step: "any" },
  { key: "longitude", label: "Longitude", type: "number", autoComplete: "off", placeholder: "49.01438194665317", step: "any" },
];

const validate = (form) => {
  const errors = {};

  if (form.title.trim().length < 3) errors.title = "At least 3 characters.";
  if (!form.description.trim()) errors.description = "Please enter a description.";
  if (!form.date) errors.date = "Please select a date and time.";
  if (!form.location.trim()) errors.location = "Please enter a location.";
  if (form.latitude === "" || Number.isNaN(Number(form.latitude))) errors.latitude = "Please enter a valid latitude.";
  if (form.longitude === "" || Number.isNaN(Number(form.longitude))) errors.longitude = "Please enter a valid longitude.";

  return errors;
};

const CreateEventPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleChange = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
    setErrors({ ...errors, [key]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setBusy(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: form.title.trim(),
          description: form.description.trim(),
          date: new Date(form.date).toISOString(),
          location: form.location.trim(),
          latitude: Number(form.latitude),
          longitude: Number(form.longitude),
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || data?.error || `Fehler ${res.status}`);
      }

      if (!data?.id) throw new Error("The server did not return the created event.");

      navigate(`/events/${data.id}`);
    } catch (err) {
      setApiError(err instanceof TypeError ? "Server nicht erreichbar. Bitte später erneut versuchen." : err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3 text-[10px] font-semibold tracking-widest uppercase">
            <span className="bg-es-accent h-2 w-2" />
            <span>[ New event ]</span>
          </div>

          <header className="px-4 pt-12 pb-10">
            <h1 className="text-6xl leading-[0.95] font-extrabold tracking-tighter sm:text-7xl">
              Create
              <br />
              an event
            </h1>
            <p className="mt-5 font-serif text-base text-neutral-600 italic">Publish a new event to the public directory.</p>
          </header>

          <form onSubmit={handleSubmit} noValidate className="border-t border-neutral-200 px-4 pt-10">
            {apiError && (
              <p role="alert" className="mb-6 border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                {apiError}
              </p>
            )}

            {fields.map(({ key, label, hint, caption, type, autoComplete, placeholder, step }) => (
              <label key={key} className="mb-6 block">
                <span className="flex items-baseline justify-between text-[10px] font-bold tracking-wider uppercase">
                  <span>{label}</span>
                  <span className="font-normal text-neutral-300">{hint}</span>
                </span>
                <input
                  type={type}
                  autoComplete={autoComplete}
                  placeholder={placeholder}
                  step={step}
                  aria-invalid={!!errors[key]}
                  value={form[key]}
                  onChange={handleChange(key)}
                  className={`w-full border-b bg-transparent py-3 text-base outline-none placeholder:text-neutral-400 focus:border-black ${errors[key] ? "border-red-500" : "border-neutral-200"}`}
                />
                <span className={`mt-2 block text-right text-[10px] font-semibold tracking-wider uppercase ${errors[key] ? "text-red-600" : "text-neutral-700"}`}>
                  {errors[key] || caption}
                </span>
              </label>
            ))}

            <label className="mb-6 block">
              <span className="flex items-baseline justify-between text-[10px] font-bold tracking-wider uppercase">
                <span>Description</span>
              </span>
              <textarea
                placeholder="Some Description for the Event"
                aria-invalid={!!errors.description}
                value={form.description}
                onChange={handleChange("description")}
                rows={5}
                className={`w-full resize-y border-b bg-transparent py-3 text-base outline-none placeholder:text-neutral-400 focus:border-black ${errors.description ? "border-red-500" : "border-neutral-200"}`}
              />
              <span className={`mt-2 block text-right text-[10px] font-semibold tracking-wider uppercase ${errors.description ? "text-red-600" : "text-neutral-700"}`}>
                {errors.description || "Describe the event"}
              </span>
            </label>

            <div className="flex items-center justify-end border-t border-neutral-200 pt-6 pb-12">
              <button disabled={busy} className="cursor-pointer bg-black px-8 py-3 text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800 disabled:opacity-50">
                {busy ? "Sending&hellip;" : "Create event"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
