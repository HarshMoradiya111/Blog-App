import axios from "axios";

export interface Blog {
  id?: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
}

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await api.get("/blogs");
  return res.data;
};

export const fetchBlogById = async (id: number): Promise<Blog> => {
  const res = await api.get(`/blogs/${id}`);
  return res.data;
};

export const createBlog = async (blog: Blog): Promise<Blog> => {
  const res = await api.post("/blogs", blog);
  return res.data;
};

export const deleteBlog = async (id: number): Promise<void> => {
  await api.delete(`/blogs/${id}`);
};
