import React from "react";
import { useTasksStore } from "../hooks/useTasksStore";
import { TasksContext } from "./tasksContext";

interface TasksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const value = useTasksStore();
  
  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;