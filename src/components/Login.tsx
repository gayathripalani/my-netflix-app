import { FC, useRef, useState } from 'react';
import { BG_URL, PHOTO_URL } from '../utils/constants';
import Header from './Header';
import { checkValidData } from '../utils/validation';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

interface AuthError {
  code: string;
  message: string;
}

const Login: FC = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current?.value ?? '', password.current?.value ?? '', name.current?.value ?? '');
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up Logic
      createUserWithEmailAndPassword(auth, email.current?.value ?? '', password.current?.value ?? '')
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value ?? '', // Handle null or undefined case
            photoURL: PHOTO_URL,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser!;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          });
        })
        .catch((error: AuthError) => {
          setErrorMessage(`${error.code} ${error.message}`);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, email.current?.value ?? '', password.current?.value ?? '')
        .then((userCredential) => {
          const user = userCredential.user;
          // Handle sign-in logic if needed
        })
        .catch((error: AuthError) => {
          setErrorMessage(`${error.code} ${error.message}`);
        });
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="absolute">
          <img className="h-screen object-cover" src={BG_URL} alt="bg-img" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
          {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-500" />}
          <input ref={email} type="text" placeholder="Email Id" className="p-4 my-2 w-full bg-gray-500" />
          <input ref={password} type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-500" />
          <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
          <button onClick={handleButtonClick} className="p-2 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
            {isSignInForm ? 'Are you new to Netflix? Sign Up Now' : 'Already registered? Sign in now'}
          </p>
        </form>
      </main>
    </>
  );
};

export default Login;
