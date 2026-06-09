import { Routes, Route } from 'react-router-dom'
import Welcome from './page/Welcome'
import Login from './page/Login'
import CreateAccount from './page/CreateAccount'
import AccountSettings from './page/AccountSettings'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </>
  )
}

export default App