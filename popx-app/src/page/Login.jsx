import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[375px] min-h-screen bg-white px-6 pt-10">

        <h1 className="mb-2" style={{
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 500,
          fontSize: '28px',
          lineHeight: '36px',
          color: '#1D2226',
        }}>
          Signin to your <br /> PopX account
        </h1>

        <p className="mb-8" style={{
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '26px',
          color: '#1D2226',
          opacity: '0.6'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Email */}
        <fieldset className="mb-4">
          <legend>&nbsp; Email Address &nbsp;</legend>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full outline-none text-sm text-gray-700 py-3 bg-transparent"
          />
        </fieldset>

        {/* Password */}
        <fieldset className="mb-6">
          <legend>&nbsp; Password &nbsp;</legend>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full outline-none text-sm text-gray-700 py-3 bg-transparent"
          />
        </fieldset>

        {/* Button */}
        <button
        onClick={() => navigate('/account-settings', {
            state: {
            name: email.split('@')[0] || 'User',
            email: email
            }
        })}
        className="w-full text-white py-3 rounded-lg font-medium transition-all"
        style={{
            background: email && password ? '#6C25FF' : '#CBCBCB',
            borderRadius: '6px'
        }}>
        Login
        </button>

      </div>
    </div>
  )
}