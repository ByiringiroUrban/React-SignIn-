
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup/Signup'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LogIn from './Signup/Login/LogIn';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element:<Signup/>
    },
    {
      path: "/login",
      element:<LogIn/>,
    }
  ]);
  return (
   <div className='App'>
   <RouterProvider router={route}></RouterProvider>
   </div>
  )
}

export default App

