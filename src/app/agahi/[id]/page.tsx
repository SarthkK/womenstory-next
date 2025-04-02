// import { blogs } from "@/lib/blogs";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}
async function Page({ params }: PageProps) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="pt-16 min-h-screen">
      {/* Blog Header Image */}
      <div className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-white overflow-hidden">
        <Image
          src="/agahi/test1.webp"
          width={1920}
          height={600}
          alt="Blog image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content Box */}
      <div className="mx-auto max-w-4xl w-[90%] md:w-[80%] mt-6 p-4 md:p-6 bg-pink-100 rounded-lg shadow-md z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Blog Title
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          This is where the blog content goes. You can add more text here to
          describe the topic in detail. The content adjusts based on screen size
          for better readability.
        </p>
      </div>
    </div>
  );
}

export default Page;
