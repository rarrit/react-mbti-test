import { getUserProfile, handleUserLogin, handleUserRegister, updateProfile } from "@/api/authAPI";
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

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: handleUserRegister,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.REGISTER]);
    }
  })
}

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: handleUserLogin,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.LOGIN]);
    }
  })
}

export const useGetProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: getUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.USER]);
    }
  })
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PROFILE]);
    }
  })
}

