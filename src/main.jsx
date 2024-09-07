import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import ListedBook from "./components/ListedBook";
import PageRead from "./components/PageRead";
import ViewDetails from "./components/ViewDetails";
import ReadBooks from "./components/ReadBooks";
import WishlistBooks from "./components/WishlistBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbook",
        element: <ListedBook></ListedBook>,

        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("../blogs.json"),
          },
          {
            path: "wishlistbooks",
            element: <WishlistBooks></WishlistBooks>,
            loader: () => fetch("../blogs.json"),
          },
        ],
      },
      {
        path: "/pageread",
        element: <PageRead></PageRead>,
      },
      {
        path: "/viewdetails/:bookId",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("../blogs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
