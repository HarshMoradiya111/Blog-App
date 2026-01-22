import { useBlog } from "./hooks/useBlogs";

export default function BlogDetail({ id }: { id: number }) {
  const { data, isLoading } = useBlog(id);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Select a blog</p>;

  return (
    <div>
      <img src={data.coverImage} className="rounded-lg mb-4" />
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="mt-2">{data.content}</p>
    </div>
  );
}
