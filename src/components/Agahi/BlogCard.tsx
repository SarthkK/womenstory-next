import { Blog } from "@/lib/blogs";
import Link from "next/link";
import React from "react";

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/agahi/${blog.id}`}>
      <div className="bg-secondary p-8">
        <p className="text-3xl">{blog.title}</p>
        <span className="font-sans text-sm">
          {blog.date} · {blog.authorName}
        </span>
        <p>{blog.content.substring(0, 100)}...</p>
      </div>
    </Link>
  );
}

export default BlogCard;
