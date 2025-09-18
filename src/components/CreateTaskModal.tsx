import React from "react";
import { X } from "lucide-react";
import TaskForm from "./TaskForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreateTask: (title: string, description: string) => void;
};

const CreateTaskModal: React.FC<Props> = ({ isOpen, onClose, onCreateTask }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Task
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <TaskForm onSubmit={onCreateTask} submitLabel="Create Task" />
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;