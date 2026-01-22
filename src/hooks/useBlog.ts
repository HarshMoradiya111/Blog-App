import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../api/blogs";

export const useBlog = (id: number) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlogById(id),
    enabled: !!id,
  });
};
