"use client";
import React, { useState } from "react";

interface Post {
  id: number; // Replace with the actual property of your posts
  title: string;
  description: string;
  image?: string; // Optional if not all posts have images
}

interface PaginationProps {
  posts: Post[]; // Type for an array of posts
  postsPerPage?: number; // Optional, default will be 6
}

const Pagination: React.FC<PaginationProps> = ({ posts, postsPerPage = 6 }) => {
  // State for current page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Get the posts for the current page
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Change page
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div key={post.id} className="p-4 border rounded-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.description}</p>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover mt-2"
              />
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="py-8 flex justify-center items-center">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-gray-600 rounded-md ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-2 mx-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-gray-600 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
