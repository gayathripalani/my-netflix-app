import { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <>
      <Header />
      <main>      
        <div className="absolute">
          <img src={BG_URL} alt="bg-img"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-500"></input>}
          <input type="text" placeholder="Email Id" className="p-4 my-2 w-full bg-gray-500"></input>
          <input type ="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-500"></input>
          <button className="p-2 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
          <p onClick={toggleSignInForm} className="py-4 cursor-pointer">{isSignInForm ? 'Are you new to Netflix? Sign Up Now' : 'Already registered? Sign in now'}</p>
        </form>
      </main>
    </>
  )
}

export default Login;
