import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardsContainer from "./components/CardsContainer.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import LoginSignup from "./auth/LoginSignup.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Bag from "./components/Bag.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import CategoryCardsContainer from "./components/category/CategoryCardsContainer.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardsContainer />,
      },
      {
        path: "/loginSignup",
        element: <LoginSignup />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails />,
      },
      {
        path: "/category/:type",
        element: <CategoryCardsContainer />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
