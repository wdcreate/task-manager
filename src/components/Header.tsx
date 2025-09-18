import { FileCheck, Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  onCreateTask: () => void;
};

const Header: React.FC<Props> = ({ onCreateTask }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <FileCheck className="w-4 h-4 text-white" />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={onCreateTask}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-2 md:px-4 py-2 md:py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Task
          </button>
          <nav>
            <Link
              to="/"
              className="text-sm px-4 py-2.5 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 border border-transparent hover:border-gray-200"
            >
              All Tasks
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;