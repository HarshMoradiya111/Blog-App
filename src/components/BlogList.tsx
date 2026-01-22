import { useBlogs } from "../hooks/useBlogs";
import { useDeleteBlog } from "../hooks/useDeleteBlog";
import BlogCard from "./BlogCard";
import { Skeleton } from "./ui/skeleton";

export default function BlogList({ onSelect }: { onSelect: (id: number) => void }) {
  const { data, isLoading, isError } = useBlogs();
  const { mutate: deleteBlog } = useDeleteBlog();

  if (isLoading) return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="h-24 w-full rounded-lg" />
      ))}
    </div>
  );

  if (isError) return <p className="text-red-600 text-sm">Error fetching blogs</p>;
  if (!data || data.length === 0) return <p className="text-gray-600 text-sm">No blogs found</p>;

  return (
    <div className="space-y-3">
      {data?.map(blog => (
        <BlogCard 
          key={blog.id} 
          blog={blog} 
          onClick={() => onSelect(blog.id!)}
          onDelete={() => blog.id && deleteBlog(blog.id)}
        />
      ))}
    </div>
  );
}
