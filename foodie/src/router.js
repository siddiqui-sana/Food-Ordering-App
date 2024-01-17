import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

//Creating the Routes here

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, //For rendering the page, if some random url is mentioned other than what is mentioned in the path.
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
