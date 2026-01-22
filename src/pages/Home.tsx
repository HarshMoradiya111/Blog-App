import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import CreateBlogForm from "../components/CreateBlogForm";
import { Card } from "../components/ui/card";

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">📚 Blog App</h1>
          <p className="text-gray-600">Explore, create, and manage your favorite blogs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="md:col-span-1 space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">✨ Create Blog</h2>
              <CreateBlogForm />
            </Card>
            
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">📰 Blog List</h2>
              <BlogList onSelect={setSelectedId} />
            </Card>
          </div>
          
          {/* Right Panel */}
          <div className="md:col-span-2">
            <Card className="p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">📖 Blog Details</h2>
              {selectedId ? (
                <BlogDetail id={selectedId} />
              ) : (
                <div className="flex items-center justify-center h-96 text-center">
                  <p className="text-gray-500 text-lg">← Select a blog to view details</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
