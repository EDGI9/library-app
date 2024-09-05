import { createBrowserRouter } from "react-router-dom"
import App from "../App.jsx"
import Book from "../components/Book.jsx"
import BookList from "../components/BookList.jsx"
import BookEditPage from "../views/BookEditPage.jsx";
import BookDetailsPage from "../views/BookDetailsPage.jsx";


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
      path: "/view/:id",
      element: <App />,
      children: [{
        path: "/view/:id",
        element: <BookDetailsPage />,
      }]
    },
    {
      path: "/edit/:id",
      element: <App />,
      children: [{
        path: "/edit/:id",
        element: <BookEditPage />,
      }]
    },
    {
        path: "/create",
        element: <App />,
        children: [{
          path: "/create",
          element: <BookEditPage />,
        }]
      }
    
  ])

  
  export default router