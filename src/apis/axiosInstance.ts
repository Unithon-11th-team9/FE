import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://ttobot.kro.kr/",
	headers: { "Content-Type": "application/json" },
});

export async function uploadFile(body: Blob) {
	const res = await axiosInstance.post(
		"/v1/peace-award",
		{ file: body },
		{ headers: { "Content-Type": "multipart/form-data" } },
	);
	return res.data;
}

type AwardResponse = {
	peace_score: { [key: string]: number };
	summary: string[];
	mbti_analysis: MbtiAnalysis;
};

type MbtiAnalysis = {
	E: string;
	F: string;
	I: string;
	T: string;
};

export async function getAwardResult(id: number): Promise<AwardResponse> {
	const res = await axiosInstance.get(`/v1/peace-award/${id}`);
	return res.data;
}
