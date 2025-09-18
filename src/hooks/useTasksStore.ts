import { useEffect, useState, useCallback } from "react";
import { readLocal, writeLocal } from "../lib/localStorage";
import { uid } from "../utils/uid";
import type { Task } from "../types";

const STORAGE_KEY = "task_manager_tasks_v1";

export const useTasksStore = () => {
  const [tasks, setTasks] = useState<Task[]>(() =>
    readLocal<Task[]>(STORAGE_KEY, [])
  );

  useEffect(() => {
    writeLocal(STORAGE_KEY, tasks);
  }, [tasks]);

  const addTask = useCallback((title: string, description: string) => {
    const now = new Date().toISOString();
    const t: Task = {
      id: uid(),
      title,
      description,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    setTasks((s) => [t, ...s]);
    return t;
  }, []);

  const updateTask = useCallback((id: string, data: Partial<Task>) => {
    setTasks((s) =>
      s.map((t) =>
        t.id === id ? { ...t, ...data, updatedAt: new Date().toISOString() } : t
      )
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((s) => s.filter((t) => t.id !== id));
  }, []);

  const toggleComplete = useCallback((id: string) => {
    setTasks((s) =>
      s.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              updatedAt: new Date().toISOString(),
            }
          : t
      )
    );
  }, []);

  const getTask = useCallback(
    (id: string) => tasks.find((t) => t.id === id),
    [tasks]
  );

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    getTask,
    setTasks,
  } as const;
};

export type TasksStoreValue = ReturnType<typeof useTasksStore>;
