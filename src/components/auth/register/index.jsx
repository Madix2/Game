import React, { useState } from "react";
import { doCreateUserEmailPass } from "../../../firebase/auth";
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from "../../../context/authcontext";

const Register = () => {
  const { userLoggedIn } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isRegistering) {
      setIsRegistering(true);
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        setIsRegistering(false);
      } else {
        try {
          await doCreateUserEmailPass(email, password);
        } catch (error) {
          setErrorMessage(error.message);
        }
        setIsRegistering(false);
      }
    }
  }

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    // Implement Google Sign-In logic here
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirm your password" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isRegistering} type="submit">Register</button>
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Already have an account? Log in</Link>
          </div>
        </form>
        <div className="mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onGoogleSignIn}>Register with Google</button>
        </div>
      </div>
    </div>
  )
}
export default Register
