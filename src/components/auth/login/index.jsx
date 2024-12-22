import React, {useState} from "react";
import { doSignInWithGoogle, doCreateUserEmailPass } from "../../../firebase/auth";
import {Navigate, Link} from 'react-router-dom';
import { useAuth } from "../../../context/authcontext";

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn){
            setIsSigningIn(true);
            await doCreateUserEmailPass(email, password);
        }
    }
    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSigningIn){
            setIsSigningIn(true);
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false);
            })
        }
    }
    return (
            <div className="flex justify-center items-center h-screen">
                {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>
                <form onSubmit={onSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSigningIn} type="submit">Sign In</button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
                  </div>
                </form>
                <div className="mt-4">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onGoogleSignIn}>Sign in with Google</button>
                </div>
              </div>
            </div>
        
    )
}
export default Login;