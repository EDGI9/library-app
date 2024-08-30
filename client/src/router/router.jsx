import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import Book from "../components/Book.jsx"
import BookList from "../components/BookList.jsx"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [{
        path: "/",
        element: <BookList />,
      }]
    },
    {
      path: "/edit/:id",
      element: <App />,
      children: [{
        path: "/edit/:id",
        element: <Book />,
      }]
    },
    {
        path: "/create",
        element: <App />,
        children: [{
          path: "/create",
          element: <Book />,
        }]
      }
    
  ])

  
  export default router