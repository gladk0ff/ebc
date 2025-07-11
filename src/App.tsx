import { createBrowserRouter, RouterProvider } from "react-router";

import { ROUTES } from "pages/config";
import "./App.css";

const router = createBrowserRouter(ROUTES);

export const App = () => <RouterProvider router={router} />;

export default App;
