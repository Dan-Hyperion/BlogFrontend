import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:8070/blogs");
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
