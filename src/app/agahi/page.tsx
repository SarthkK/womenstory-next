import AgahiTitle from "@/components/Agahi/AgahiTitle";
import AgahiTitleLarge from "@/components/Agahi/AgahiTitleLarge";
import BlogCard from "@/components/Agahi/BlogCard";
import { blogs } from "@/lib/blogs";
import React from "react";

function page() {
  return (
    <div className="pt-16 grid lg:grid-cols-8 min-h-screen">
      <div className="lg:hidden">
        <AgahiTitle />
      </div>
      <div className="hidden lg:block w-max  col-span-2 relative">
        <AgahiTitleLarge />
      </div>
      <div className=" lg:col-span-6 flex flex-col gap-4 p-5 lg:pl-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default page;
