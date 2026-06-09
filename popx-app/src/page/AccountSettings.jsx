import { useLocation } from 'react-router-dom'

export default function AccountSettings() {
  const location = useLocation()
  const { name = 'Marry Doe', email = 'Marry@Gmail.Com' } = location.state || {}
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[375px] min-h-screen bg-white">

        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-gray-200">
          <h1 className="text-lg font-bold" style={{
            fontFamily: 'Rubik, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '21px',
            letterSpacing: '0px',
            color: '#1D2226',
            textTransform: 'capitalize',
            opacity: '1',
          }}>Account Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white px-6 py-6 mt-2">
          
          <div className="flex items-center gap-4 mb-4">
            
            {/* Avatar */}
            <div className="relative">
              <img
                src="/d51c7025-46da-4a3e-aa82-50beb1bb4797.png"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full">
                <div
                  style={{
                    width: '21px',
                    height: '23px',
                    backgroundImage: "url('/Group1585.svg')",
                    backgroundPosition: '0% 0%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 1
                  }}
                />
              </div>
            </div>

            {/* Name , Email */}
            <div>
              <h2 style={{
                color: '#1D2226',
                fontFamily: 'Rubik, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0px',
                textTransform: 'capitalize',
              }}>
                {name}
              </h2>
              <p className="text-gray-500 text-sm">{email}</p>
            </div>

          </div>

          {/* Bio */}
          <p className="text-sm leading-relaxed border-t border-dashed pt-4"
            style={{color: '#1D2226', fontFamily: 'Rubik, sans-serif', fontSize: '14px', fontWeight: 400, letterSpacing: '0px', opacity: '1'}}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam
          </p>

        </div>

      </div>
    </div>
  )
}