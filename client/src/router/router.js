import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import Record from "../components/Record"
import RecordList from "../components/RecordList"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{
        path: "/",
        element: <RecordList />,
      }]
    },
    {
      path: "/edit/:id",
      element: <App />,
      children: [{
        path: "/edit/:id",
        element: <Record />,
      }]
    },
    {
        path: "/create",
        element: <App />,
        children: [{
          path: "/create",
          element: <Record />,
        }]
      }
    
  ])

  
  export default router