import { deleteTestResult, updateTestResultVisibility } from "@/api/mbtiAPI";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteMbti = () => {  
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.MBTI]);
    }
  })
}

export const useVisibilityMbti = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationFn : 인자를 1개만 받을 수 있음
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.MBTI]);
    }
  })
}