import BlogCard from "@/components/Agahi/BlogCard";
import { blogs } from "@/lib/blogs";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-8 pt-24 min-h-screen px-3">
      <div className=" col-span-2 border-r flex items-center flex-col">
        <h1 className="text-8xl">AGAHI</h1>
      </div>
      <div className=" col-span-6 flex flex-col gap-2 p-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default page;
