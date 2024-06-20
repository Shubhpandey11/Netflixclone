
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import NetflixSignUp from './components/signIn/NetflixSignUp'
import Layout from './Layout'



function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />
    },
     {
      path: "/signIn",
      element: <NetflixSignUp />
    }
  ]
  )
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Combine />}>
  //       <Route path='/signIn' element={<NetflixSignUp />} />
  //     </Route>
  //   )
  // )

  
  return (
    <div id='father'>
       {/* <Header /> */}
       <RouterProvider router={router} />
    </div>
  )
}

export default App
