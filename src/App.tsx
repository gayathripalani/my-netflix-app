import Login from './components/Login'
import Browse from './components/Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './utils/userSlice'

const App = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element:  <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      }
      else {
        dispatch(removeUser());
      }
    })
  }, [])

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App;

