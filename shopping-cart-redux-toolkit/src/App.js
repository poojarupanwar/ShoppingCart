import "./App.css";
import Products from "./ShoppingCart/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./ShoppingCart/Navbar";
import Dashboard from "./ShoppingCart/Dashboard";
import Cart from "./ShoppingCart/Cart";
//import classes from react router dom library

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
