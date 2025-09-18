import { createContext, useContext } from "react";
import type { TasksStoreValue } from "../hooks/useTasksStore";


export const TasksContext = createContext<TasksStoreValue | undefined>(undefined);

export const useTasksContext = (): TasksStoreValue => {
  const ctx = useContext(TasksContext);
  if (!ctx) throw new Error("useTasksContext must be used within TasksProvider");
  return ctx;
};
