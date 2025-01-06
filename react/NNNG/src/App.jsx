import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { createContext, useEffect, useState } from "react";
import { Item_template } from "./components/Mid/item_box_anchor/Item_template.jsx";
import { Cart } from './components/cart/cart';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Products/:id', element: <Item_template /> },
  { path: '/cart', element: <Cart /> },
]);

export const Cart_items = createContext();



function App() {

  
// useEffect(() => {
//   const handleBeforeUnload = (event) => {
//     // Display a warning message
//     event.preventDefault();
//     event.returnValue = "The cart data will be reseted"; // This triggers the browser's default warning dialog
//   };

//   window.addEventListener("beforeunload", handleBeforeUnload);

//   return () => {
//     window.removeEventListener("beforeunload", handleBeforeUnload);
//   };
// }, []);

  const [Items, setItems] = useState({ items: [] });

  return (
    <Cart_items.Provider value={{ Items, setItems }}>
      <RouterProvider router={router} />
    </Cart_items.Provider>
  );
}

export default App;
