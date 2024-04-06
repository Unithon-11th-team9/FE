import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://3.36.114.87:8000",
	headers: { "Content-Type": "application/json" },
});

export default async function uploadFile(body: Blob) {
	const res = await axiosInstance.post(
		"/v1/peace-award",
		{ file: body },
		{ headers: { "Content-Type": "multipart/form-data" } },
	);
	return res.data;
}
