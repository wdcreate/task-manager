import { Plus } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";

type Props = {
  initial?: { title?: string; description?: string };
  onSubmit: (title: string, description: string) => void;
  submitLabel?: string;
};

const TaskForm: React.FC<Props> = ({
  initial,
  onSubmit,
  submitLabel = "Save",
}) => {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");

  useEffect(() => {
    setTitle(initial?.title ?? "");
    setDescription(initial?.description ?? "");
  }, [initial]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onSubmit(title.trim(), description.trim());
    
    if (!initial) {
      setTitle("");
      setDescription("");
    }
  }, [title, description, onSubmit, initial]);

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Task Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
          placeholder="What needs to be done?"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
          placeholder="Add more details... (optional)"
          rows={3}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          disabled={!title.trim()}
        >
          <Plus className="w-4 h-4"/>
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;