import { useBlog } from "../hooks/useBlog";
import { useDeleteBlog } from "../hooks/useDeleteBlog";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

export default function BlogDetail({ id }: { id: number }) {
  const { data, isLoading } = useBlog(id);
  const { mutate: deleteBlog, isPending } = useDeleteBlog();

  if (isLoading) return (
    <div className="space-y-4">
      <Skeleton className="h-64 w-full rounded-lg" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-20 w-full" />
    </div>
  );

  if (!data) return <p className="text-gray-500">Select a blog</p>;

  return (
    <div className="space-y-4">
      <img src={data.coverImage} alt={data.title} className="rounded-lg w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
      
      <div className="flex gap-2">
        {data.category.map(cat => (
          <span key={cat} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded">
            {cat}
          </span>
        ))}
      </div>
      
      <p className="text-sm text-gray-500">{new Date(data.date).toLocaleDateString()}</p>
      <p className="text-gray-700 whitespace-pre-line">{data.content}</p>
      
      <Button 
        variant="destructive"
        onClick={() => deleteBlog(data.id!)}
        disabled={isPending}
      >
        {isPending ? "Deleting..." : "Delete Blog"}
      </Button>
    </div>
  );
}
