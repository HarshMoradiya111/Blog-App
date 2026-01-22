import { useCreateBlog } from "../hooks/useCreateBlog";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CreateBlogForm() {
  const { mutate, isPending } = useCreateBlog();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validate = (): boolean => {
    if (!title.trim()) {
      setError("Title is required");
      return false;
    }
    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return false;
    }
    if (!description.trim()) {
      setError("Description is required");
      return false;
    }
    setError("");
    return true;
  };

  const submit = () => {
    if (!validate()) return;

    mutate({
      title,
      description,
      category: ["TECH"],
      date: new Date().toISOString(),
      coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      content: description,
    }, {
      onSuccess: () => {
        setTitle("");
        setDescription("");
        setSuccess("Blog created successfully!");
        setTimeout(() => setSuccess(""), 3000);
      },
    });
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
      {success && <p className="text-green-600 text-sm font-medium">{success}</p>}
      
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Blog Title"
        disabled={isPending}
      />
      
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 text-sm"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Blog Description"
        rows={3}
        disabled={isPending}
      />
      
      <Button 
        onClick={submit} 
        disabled={isPending}
        className="w-full"
      >
        {isPending ? "Creating..." : "Create Blog"}
      </Button>
    </div>
  );
}
