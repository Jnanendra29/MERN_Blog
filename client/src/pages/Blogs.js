import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blogs = () => {

  //blogs state
  const [blogs, setBlogs] = useState([]);
  //get blogs

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blogs/allBlogs");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog?._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog? blog.image : "/download.jpeg"}
            username={blog?.user?.username}
            time={blog.createdAt}
          />
        ))}
    </div>
  );
};

export default Blogs;