import React from "react";

const BlogCard = ({ image, title, buttonText = "Readmore", onClick }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h3 className="text-md font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        <button
          onClick={onClick}
          className="text-green-600 font-medium flex items-center gap-1 hover:underline cursor-pointer"
        >
          {buttonText} →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;