"use client";
import { blogs } from "@/lib/blogs";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const params = useParams<{ id: string }>();
  console.log(params);
  const blog = blogs.find((blog) => blog.id === parseInt(params.id));
  return <div className="pt-48">{JSON.stringify(blog)}</div>;
}

export default Page;
