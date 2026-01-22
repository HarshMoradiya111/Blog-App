import { useCreateBlog } from "./hooks/useCreateBlog";
import { useState } from "react";

export default function CreateBlogForm() {
  const { mutate } = useCreateBlog();
  const [title, setTitle] = useState("");

  const submit = () => {
    mutate({
      title,
      category: ["TECH"],
      description: "Sample description",
      date: new Date().toISOString(),
      coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      content: "Full content",
    });
  };

  return (
    <div className="space-y-2">
      <input
        className="border p-2 w-full"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <button onClick={submit} className="bg-black text-white px-4 py-2">
        Create Blog
      </button>
    </div>
  );
}
