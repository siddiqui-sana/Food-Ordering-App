import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import { createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* Acts as tunnel for child elements, the element that is attack to the link clicked, that component replaces the outlet */}
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // :resId represents the dynamic path, so resId will be dynamic. Inside the restaurants component, we can access this dynamic path using useParams hook.
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />, //For rendering the page, if some random url is mentioned other than what is mentioned in the path.
  },
]);

export default App;
