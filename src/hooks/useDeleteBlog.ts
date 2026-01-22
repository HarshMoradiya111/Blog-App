import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../api/blogs";

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
