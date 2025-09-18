import React, { useMemo } from "react";
import TaskItem from "./TaskItem";
import type { Task } from "../types";
import { Clipboard } from "lucide-react";

type Props = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

const TaskList: React.FC<Props> = ({ tasks, onDelete, onToggle }) => {
  const sortedTasks = useMemo(() => 
    [...tasks].sort((a, b) => Number(a.completed) - Number(b.completed))
  , [tasks]);

  if (tasks.length === 0)
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clipboard className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
        <p className="text-gray-500">Create your first task to get started!</p>
      </div>
    );

  return (
    <ul className="space-y-4">
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default TaskList;
