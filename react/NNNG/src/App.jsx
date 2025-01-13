// import './App.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Home } from './Home';
// import { createContext, useEffect, useState } from "react";
// import { Item_template } from "./components/Mid/item_box_anchor/Item_template.jsx";
// import { Brand_template } from "./components/Mid/item_box_anchor/Brand_template.jsx";
// import { Cart } from './components/cart/cart';
// import { Individual_Item_template } from './components/Mid/item_box_anchor/Individual_Products/Individual_Item_template.jsx'
// import { CartContext } from './ContextHooks.jsx';
// import { Test } from './test.jsx';
// import { Footer } from './components/Footer/Footer.jsx';

// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/:id', element: <Item_template /> },
//   { path: '/:id/:aboutId', element: <Individual_Item_template /> },
//   { path: '/cart', element: <Cart /> },
//   { path: '/Home/:Brands', element: <Brand_template /> },
//   { path: '/test', element: <Footer /> },
// ]);

// // Rename Cart_items to CartContext
// // @vite-ignore-hmr



// function App() {
//   const [Items, setItems] = useState({ items: [] });
//   useEffect(() => {
//     const storedCart = window.localStorage.getItem("cartItems");
//     if (storedCart) {
//         setItems(JSON.parse(storedCart)); // Load cartItems from localStorage
//     }
//   }, [setItems]);
  
//   // Save Items to localStorage whenever it changes
//   useEffect(() => {
//     window.localStorage.setItem("cartItems", JSON.stringify(Items));
//   }, [Items]);

//   // NOTE : useEffect in Item_template is important on those jsx where ADD TO CARRT is used.....we needto plave that in order to save the data in local storage and then the Cart can get those Items

//   return (
//     <>
//       <CartContext.Provider value={{ Items, setItems }}>
//         <RouterProvider router={router} />
//       </CartContext.Provider>
//     </>
//   );
// }

// export default App;

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Home';
import { Item_template } from "./components/Mid/item_box_anchor/Item_template.jsx";
import { Brand_template } from "./components/Mid/item_box_anchor/Item_By_Brand/Brand_template.jsx";
import { Cart } from './components/cart/cart';
import { Individual_Item_template } from './components/Mid/item_box_anchor/Individual_Products/Individual_Item_template.jsx';
import { CartProvider } from './ContextHooks.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { See_More_of_Brand_Item } from './components/Mid/item_box_anchor/Item_By_Brand/See_More_of_Brand.jsx';

const router = createBrowserRouter([
  { path: '/E-commerce-website/', element: <Home /> },
  { path: '/E-commerce-website/:id', element: <Item_template /> },
  { path: '/E-commerce-website/:id/:aboutId', element: <Individual_Item_template /> },
  { path: '/E-commerce-website/cart', element: <Cart /> },
  { path: '/E-commerce-website/Home/:Brands', element: <Brand_template /> },
  { path: '/E-commerce-website/test', element: <Footer /> },
  {path:'/E-commerce-website/Home/:Brands/:SeeMore' ,element:<See_More_of_Brand_Item />}
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

