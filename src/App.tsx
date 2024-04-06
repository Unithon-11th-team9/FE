import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import UploadPage from "./pages/UploadPage";
import LoadingPage from "./pages/LoadingPage";
import ResultPage from "./pages/ResultPage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <JoinPage />,
		},
		{
			path: "/upload",
			element: <UploadPage />,
		},
		{
			path: "/loading",
			element: <LoadingPage />,
		},
		{
			path: "/result",
			element: <ResultPage />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
