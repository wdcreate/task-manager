import React, { useState } from "react";
import Header from "./Header";
import CreateTaskModal from "./CreateTaskModal";
import { useTasksContext } from "../context/tasksContext";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addTask } = useTasksContext();

  const handleCreateTask = (title: string, description: string) => {
    addTask(title, description);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <Header onCreateTask={() => setIsModalOpen(true)} />
      <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateTask={handleCreateTask}
      />
    </div>
  );
};

export default Layout;
