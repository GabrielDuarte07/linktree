import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Admin } from "./pages/admin";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Networks } from "./pages/networks";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				element: <Home />,
				path: "/",
			},
			{
				element: <Admin />,
				path: "/admin/social",
			},
			{
				element: <Networks />,
				path: "/networks",
			},
			{
				element: <Login />,
				path: "/login",
			},
		],
	},
]);

export { router };
