import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div className="w-full h-full pb-6 bg-main-background bg-no-repeat bg-[center_top_45em]">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;