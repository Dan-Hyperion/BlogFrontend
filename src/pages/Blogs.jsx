import { useEffect, useState } from "react";
import Nav from "../components/Nav";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://blogappbackend-qqg5.onrender.com/blogs"
      );
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <Nav />
      {blogs.map((blog) => {
        return (
          <div key={blog.author}>
            <h1>{blog.author}</h1>
            <p>{blog.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
