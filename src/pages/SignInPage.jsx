import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { LightTunnel } from "@/components";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";
const TOKEN_KEY = "token";

const initialForm = { email: "", password: "" };

const fields = [
  {
    key: "email",
    label: "E-Mail-Adresse",
    type: "email",
    autoComplete: "email",
    placeholder: "name@domain.com",
  },
  {
    key: "password",
    label: "Passwort",
    type: "password",
    autoComplete: "current-password",
    placeholder: "",
  },
];

const validate = (form) => {
  const errors = {};
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = "Bitte gültige E-Mail eingeben.";
  if (!form.password) errors.password = "Bitte Passwort eingeben.";
  return errors;
};

const SignInPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const known = {
          400: "E-Mail oder Passwort ist falsch.",
          401: "E-Mail oder Passwort ist falsch.",
        };
        throw new Error(known[res.status] || "Anmeldung fehlgeschlagen. Bitte später erneut versuchen.");
      }
      const token = data?.token || data?.accessToken;
      if (!token) throw new Error("Kein Token vom Server erhalten.");

      localStorage.setItem(TOKEN_KEY, token);
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (err) {
      setApiError(err instanceof TypeError ? "Server nicht erreichbar. Bitte später erneut versuchen." : err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="bg-es-background fixed inset-0 z-0">
        <LightTunnel lightMode cableColor="#000" pulseColor="#" opacity={0.1} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3 text-[10px] font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-es-accent" />
            <span>[ Anmeldung ]</span>
          </div>

          <header className="px-4 pt-12 pb-10">
            <h1 className="text-6xl leading-[0.95] font-extrabold tracking-tighter sm:text-7xl">
              Willkommen
              <br />
              zurück.
            </h1>
            <p className="mt-5 font-serif text-base text-neutral-600 italic">Melde dich an, um Events zu erstellen und deinen Kalender zu pflegen.</p>
          </header>

          <form onSubmit={handleSubmit} noValidate className="border-t border-neutral-200 px-4 pt-10">
            {location.state?.registered && !apiError && <p className="mb-6 border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-800">Registrierung erfolgreich. Bitte melde dich an.</p>}

            {apiError && (
              <p role="alert" className="mb-6 border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                {apiError}
              </p>
            )}

            {fields.map(({ key, label, hint, caption, type, autoComplete, placeholder }) => (
              <label key={key} className="mb-6 block">
                <span className="flex items-baseline justify-between text-[10px] font-bold tracking-wider uppercase">
                  <span>{label}</span>
                  <span className="font-normal text-neutral-300">{hint}</span>
                </span>
                <input type={type} autoComplete={autoComplete} placeholder={placeholder} aria-invalid={!!errors[key]} value={form[key]} onChange={handleChange(key)} className={`w-full border-b bg-transparent py-3 text-base outline-none placeholder:text-neutral-400 focus:border-black ${errors[key] ? "border-red-500" : "border-neutral-200"}`} />
                <span className={`mt-2 block text-right text-[10px] font-semibold tracking-wider uppercase ${errors[key] ? "text-red-600" : "text-neutral-700"}`}>{errors[key] || caption}</span>
              </label>
            ))}

            <div className="flex items-center justify-between border-t border-neutral-200 pt-6 pb-12">
              <button disabled={busy} className="bg-black px-8 py-4 text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800 disabled:opacity-50">
                {busy ? "Wird gesendet …" : "Anmelden"}
              </button>
              <Link to="/register" className="border-b-2 border-black text-[10px] font-bold tracking-wider uppercase">
                Noch kein Konto? Registrieren →
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
