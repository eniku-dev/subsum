import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-gray-400">404</h1>
        <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-2 text-md md:text-lg text-gray-500">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-sm md:text-md font-medium text-white bg-blue-500 rounded-full hover:bg-blue-600"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
