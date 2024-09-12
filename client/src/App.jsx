import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

import { GET_ALL_BOOKS } from "./store/slices/books";

import Navbar from "./components/Navbar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBooks() {
      dispatch(GET_ALL_BOOKS())
    }
    getBooks();
    
    return;
  }, [dispatch]);

  return (
    <div className="w-full p-6">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;