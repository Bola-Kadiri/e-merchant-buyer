import { RouterProvider } from "react-router-dom"
import { router } from "./Pages/Dashboard/Routes"


function App() {
  return (
         <RouterProvider router={router}/>
    
  )
}

export default App
