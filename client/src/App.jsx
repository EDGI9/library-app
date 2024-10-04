import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="w-full h-full bg-main-background bg-no-repeat bg-[center_top_45em]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App;