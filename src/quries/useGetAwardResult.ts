import { getAwardResult } from "@/apis/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export default function useGetAwardResult(id: number) {
	return useQuery({ queryKey: ["get-award-result"], queryFn: () => getAwardResult(id) });
}
