import uploadFile from "@/apis/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export default function useUploadFile() {
	return useMutation({ mutationFn: (body: Blob) => uploadFile(body) });
}
