import { onAuthStateChanged, signOut } from 'firebase/auth'
import { LOGO, USER_AVATAR } from '../utils/constants'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
        navigate("/error");
    }) 

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [])

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        {user && <div className="flex p-2"><img className="w-12 h-12" alt="usericon" src={user?.photoURL ?? USER_AVATAR} />
        <button className="text-white font-bold" onClick={handleSignOut}>(Sign out)</button></div>}
    </div>
  )
}

export default Header
function dispatch(arg0: any) {
    throw new Error('Function not implemented.')
}

