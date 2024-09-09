import { getTestResults } from "@/api/mbtiAPI";
// import { QUERY_KEYS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useMbti = () => useQuery({
  queryKey: ["mbti"],
  queryFn: getTestResults,
})