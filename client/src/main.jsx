import * as React from "react"
import * as ReactDom from "react-dom/client"

import router from "./router/router.jsx"
import store from "./store/index.ts"
import './index.css'
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
)

