import { RouterProvider, createBrowserRouter } from "react-router-dom";
import JoinPage from "./pages/JoinPage";
import UploadPage from "./pages/UploadPage";
import ResultPage from "./pages/ResultPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
			path: "/result/:id",
			element: <ResultPage />,
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
