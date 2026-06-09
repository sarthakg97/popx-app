import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  return (
      
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="w-[375px] min-h-screen bg-gray-50 flex flex-col justify-end px-6 pb-10">
    <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 " style={{
          font: 'normal normal medium 28px/17px Rubik',
          letterSpacing: '0px',
          color: '#1D2226',
          opacity: '1',
        }}>
          Welcome to PopX
        </h1>
        <p className="text-gray-400 text-sm" style={{
          font: 'normal normal normal 18px/26px Rubik',
          letterSpacing: '0px',
          color: '#1D2226',
          opacity: '0.6',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
        onClick={() => navigate('/create-account')}
        style={{backgroundColor: '#6C25FF', font: 'normal normal medium 15px/19px Rubik'}}
        className="w-full text-white py-3 rounded-lg font-medium transition-all">
        Create Account
      </button>

        <button
        onClick={() => navigate('/login')}
        style={{
          backgroundColor: '#6C25FF4B',
          width: '100%',
          height: '46px',
          color: '#6C25FF',
          font: 'normal normal medium 15px/19px Rubik',
          letterSpacing: '0px',
          color: '#1D2226',
          opacity: '1',
        }}
        className="rounded-lg font-medium transition-all">
        Already Registered? Login
      </button>
      </div>
  </div>
</div>

  )
}