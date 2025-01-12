// // import Header from './components/Header.jsx';
// // import Shop from './components/Shop.jsx';
// // import { DUMMY_PRODUCTS } from './dummy-products.js';
// // import Product from './components/Product'
// // import { CartContextProvider } from './store/shopping-cart-context.jsx';
// import Form from './Form.jsx';
// function App() {

//   return (
//     // <CartContextProvider>
//     //   <Header />
//     //   <Shop >

//     //     {DUMMY_PRODUCTS.map((product) => (
//     //       <li key={product.id}>
//     //         <Product {...product} />
//     //       </li>
//     //     ))}

//     //   </Shop>
//     // </CartContextProvider>
//     <>

//       <Form />
//     </>

//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<div><Form /></div>} />
        </Routes>
    </Router>
);
export default App;
