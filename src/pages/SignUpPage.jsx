import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import LightTunnel from '../components/LightTunnel'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const initialForm = { email: '', password: '', confirm: '' }

const fields = [
  ['email', 'E-Mail', 'email', 'email'],
  ['password', 'Passwort', 'password', 'new-password'],
  ['confirm', 'Passwort wiederholen', 'password', 'new-password'],
]

const validate = (form) => {
  const errors = {}
  if (!/^\S+@\S+\.\S+$/.test(form.email))
    errors.email = 'Bitte gültige E-Mail eingeben.'
  if (form.password.length < 8) errors.password = 'Mindestens 8 Zeichen.'
  if (form.confirm !== form.password)
    errors.confirm = 'Passwörter stimmen nicht überein.'
  return errors
}

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4">
      <div className="absolute inset-0">
        <LightTunnel />
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative z-10 w-full max-w-sm space-y-4 bg-white/80 p-6 rounded-2xl"
      >
        {' '}
        <h1 className="text-2xl test-black font-semibold tracking-tight">Registrieren</h1>
        {apiError && (
          <p
            role="alert"
            className="border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {apiError}
          </p>
        )}
        {fields.map(([key, label, type, autoComplete]) => (
          <label key={key} className="block text-sm">
            <span className="mb-1 block text-neutral-600">{label}</span>
            <input
              type={type}
              autoComplete={autoComplete}
              value={form[key]}
              onChange={handleChange(key)}
              className={`w-full border px-3 py-2 text-sm outline-none focus:border-black ${
                errors[key] ? 'border-red-400' : 'border-neutral-300'
              }`}
            />
            {errors[key] && (
              <span className="mt-1 block text-xs text-red-600">
                {errors[key]}
              </span>
            )}
          </label>
        ))}
        <button
          disabled={busy}
          className="bg-black px-4 py-2 text-sm text-white hover:bg-neutral-800 disabled:opacity-50"
        >
          {busy ? 'Wird gesendet …' : 'Konto erstellen'}
        </button>
        <p className="text-sm text-neutral-500">
          Bereits registriert?{' '}
          <Link to="/signin" className="text-black underline">
            Anmelden
          </Link>
        </p>
      </form>
    </section>
  )
}

export default SignUpPage
