import { useRef, useState } from "react";
import { BG_URL, PHOTO_URL } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    const message = checkValidData(email.current?.value, password.current?.value, name.current?.value);
    setErrorMessage(message);
    if (message) return;
    if(!isSignInForm) {
      // Sign in Logic 
      createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: PHOTO_URL
        })
        .then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          })
      })
      .catch((error) => {
        return setErrorMessage(`${error.code} ${error.message}`);
      })

    }
    else {
      signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        return setErrorMessage(`${error.code} ${error.message}`);
      })
    }
  }
  return (
    <>
      <Header />
      <main>      
        <div className="absolute">
          <img src={BG_URL} alt="bg-img"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"> 
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-500"></input>}
          <input ref={email} type="text" placeholder="Email Id" className="p-4 my-2 w-full bg-gray-500"></input>
          <input ref={password} type ="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-500"></input>
          <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
          <button onClick={handleButtonClick} className="p-2 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
          <p onClick={toggleSignInForm} className="py-4 cursor-pointer">{isSignInForm ? 'Are you new to Netflix? Sign Up Now' : 'Already registered? Sign in now'}</p>
        </form>
      </main>
    </>
  )
}

export default Login;

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

