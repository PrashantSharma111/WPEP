import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
//
// import Root from "./Day-17/Root.jsx";
//
// import Home, { randomUserLoader } from "./Day-17/Home.jsx";
// import About from "./Day-17/About.jsx";
// import ContactUs from "./Day-17/ContactUs.jsx";
// import ErrorPage from "./Day-17/ErrorPage.jsx";
// import Product from "./Day-17/Product.jsx";
//
// import { Provider } from "react-redux";
// import store from "./store";
//
// const router = createBrowserRouter([
// {
// path: "/",
// element: <Root />,
// children: [
// {
// path: "/",
// element: <Home />,
// loader: randomUserLoader,
// },
// {
// path: "/about",
// element: <About />,
// },
// {
// path: "/contact",
// element: <ContactUs />,
// },
// {
// path: "/product",
// element: <Product />,
// },
// {
// path: "*",
// element: <ErrorPage />,
// },
// ],
// },
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </StrictMode>
);
