import * as React from "react"
import * as ReactDom from "react-dom/client"

import router from "./router/router.js"
import './index.css'
import { RouterProvider } from "react-router-dom"

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

