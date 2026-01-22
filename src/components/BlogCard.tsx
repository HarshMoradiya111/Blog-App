import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface Blog {
  id?: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

export default function BlogCard({ blog, onClick, onDelete }: { blog: Blog; onClick: () => void; onDelete?: () => void }) {
  return (
    <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
      <div onClick={onClick}>
        <h2 className="font-bold text-lg text-gray-900">{blog.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{blog.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">{new Date(blog.date).toLocaleDateString()}</span>
          <div className="flex gap-1">
            {blog.category.map(cat => (
              <span key={cat} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
      {onDelete && (
        <Button
          variant="destructive"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="mt-3 w-full"
        >
          Delete
        </Button>
      )}
    </Card>
  );
}
