import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function CreateAccount() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-family-Rubik">
  <div className="w-[375px] min-h-screen bg-white relative overflow-hidden p-6 flex flex-col justify-between">
      <div className="flex flex-col gap-4 mt-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Create your <br /> PopX account
      </h1>

        <fieldset>
          <legend>&nbsp; Full Name* &nbsp;</legend>
          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" className="w-full outline-none text-sm text-gray-700 py-3 bg-transparent" />
        </fieldset>

        <fieldset>
          <legend>&nbsp; Phone number* &nbsp;</legend>
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number*" className="w-full outline-none text-sm text-gray-700 py-3 bg-transparent" />
        </fieldset>

        <fieldset>
          <legend>&nbsp; Email address* &nbsp;</legend>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address*" className="w-full outline-none text-sm text-gray-700 py-3 bg-transparent" />
        </fieldset>

        <fieldset>
          <legend>&nbsp; Password* &nbsp;</legend>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password*" className="w-full outline-none text-sm text-gray-700 py-3 bg-transparent" />
        </fieldset>

        <fieldset>
          <legend>&nbsp; Company name &nbsp;</legend>
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className="w-full outline-none text-sm text-gray-700 py-3 bg-transparent" />
        </fieldset>

        {/* Agency */}
        <div>
          <p className="text-sm text-gray-700 mb-2">Are you an Agency?*</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === 'yes'} onChange={handleChange} style={{background: '#6C25FF 0% 0% no-repeat padding-box'}} />
              Yes
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="isAgency" value="no" checked={formData.isAgency === 'no'} onChange={handleChange} style={{background: '#6C25FF 0% 0% no-repeat padding-box'}} />
              No
            </label>
          </div>
        </div>

      </div>

      <button
        onClick={() => navigate('/account-settings', { state: { name: formData.fullName, email: formData.email } })}
        className="w-full text-white py-3 rounded-lg font-medium mt-8 transition-all" style={{background: '#6C25FF'}}>
        Create Account
      </button>

  </div>
</div>
  )
}