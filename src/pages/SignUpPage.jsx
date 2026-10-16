import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import LightTunnel from '../components/LightTunnel'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const initialForm = { email: '', password: '', confirm: '', agree: false };

const fields = [
  {
    key: 'email',
    label: 'E-Mail-Adresse',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'name@domain.com',
  },
  {
    key: 'password',
    label: 'Passwort',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'min. 8 Zeichen',
  },
  {
    key: 'confirm',
    label: 'Passwort bestätigen',
    type: 'password',
    autoComplete: 'new-password',
    placeholder: '',
  },
];

const validate = (form) => {
  const errors = {};
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = 'Bitte gültige E-Mail eingeben.';
  if (form.password.length < 8) errors.password = 'Mindestens 8 Zeichen.';
  if (form.confirm !== form.password) errors.confirm = 'Passwörter stimmen nicht überein.';
  if (!form.agree) errors.agree = 'Bitte stimme den Richtlinien zu.';
  return errors;
};

const SignUpPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState('')
  const [busy, setBusy] = useState(false)

  const handleChange = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value })
    setErrors({ ...errors, [key]: undefined })
  }

  const handleAgree = (e) => {
    setForm({ ...form, agree: e.target.checked });
    setErrors({ ...errors, agree: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setApiError('')

    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setBusy(true)
    try {
      const res = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.message || data?.error || `Fehler ${res.status}`)
      }

      navigate('/signin')
    } catch (err) {
      setApiError(
        err instanceof TypeError
          ? 'Server nicht erreichbar. Bitte später erneut versuchen.'
          : err.message,
      )
    } finally {
      setBusy(false)
    }
  }

  return (
      <div className="relative min-h-screen overflow-hidden bg-[#faf9f6]">
    <div className="absolute inset-0">
      <LightTunnel
        lightMode
        cableColor="#e65054"
        pulseColor="#"
        opacity={0.2}
      />
    </div>
<div className="relative z-10">     
   <div className="mx-auto max-w-xl">
        <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3 text-[10px] font-semibold uppercase tracking-widest">
          <span className="h-2 w-2 bg-orange-600" />
          <span>[ Registrierung ]</span>
        </div>
        <header className="px-4 pb-10 pt-12">
          <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl">
            Konto
            <br />
            erstellen.
          </h1>
          <p className="mt-5 font-serif text-base italic text-neutral-600">
            Tritt dem öffentlichen Katalog bei. Veranstalte Treffen, kuratiere lokale Kalender und
            veröffentliche Community-Events.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="border-t border-neutral-200 px-4 pt-10">
          {apiError && (
            <p role="alert" className="mb-6 border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
              {apiError}
            </p>
          )}

          {fields.map(({ key, label, hint, caption, type, autoComplete, placeholder }) => (
            <label key={key} className="mb-6 block">
              <span className="flex items-baseline justify-between text-[10px] font-bold uppercase tracking-wider">
                <span>{label}</span>
                <span className="font-normal text-neutral-300">{hint}</span>
              </span>
              <input
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                aria-invalid={!!errors[key]}
                value={form[key]}
                onChange={handleChange(key)}
                className={`w-full border-b bg-transparent py-3 text-base outline-none placeholder:text-neutral-400 focus:border-black ${
                  errors[key] ? 'border-red-500' : 'border-neutral-200'
                }`}
              />
              <span
                className={`mt-2 block text-right text-[10px] font-semibold uppercase tracking-wider ${
                  errors[key] ? 'text-red-600' : 'text-neutral-700'
                }`}
              >
                {errors[key] || caption}
              </span>
            </label>
          ))}

          <div className="mb-8">
            <label className="flex items-start gap-3 text-xs text-neutral-700">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={handleAgree}
                aria-invalid={!!errors.agree}
                className="mt-0.5 h-4 w-4 accent-black"
              />
              <span>
                Ich stimme der{' '}
                <span className="border-b border-dotted border-neutral-400 text-black">
                  Archival Charter
                </span>{' '}
                zu und erkläre, dass meine Events den Richtlinien für öffentliche,
                nicht-kommerzielle Kuratierung entsprechen.
              </span>
            </label>
            {errors.agree && (
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wider text-red-600">
                {errors.agree}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-neutral-200 pt-6 pb-12">
            <button
              disabled={busy}
              className="bg-black px-8 py-4 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-neutral-800 disabled:opacity-50"
            >
              {busy ? 'Wird gesendet …' : 'Konto erstellen'}
            </button>
            <Link
              to="/signin"
              className="border-b-2 border-black text-[10px] font-bold uppercase tracking-wider"
            >
              Schon registriert? Anmelden →
            </Link>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignUpPage;
