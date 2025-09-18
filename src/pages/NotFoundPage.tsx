import React from "react";
import { Link } from "react-router-dom";
import { FileQuestion, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
          <FileQuestion className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another
          location.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tasks
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
