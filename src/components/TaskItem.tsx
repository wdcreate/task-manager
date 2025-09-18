import { memo } from "react";
import { Link } from "react-router-dom";
import type { Task } from "../types";
import { CalendarDays, Check, Trash2 } from "lucide-react";

type Props = {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

const TaskItem = memo<Props>(({ task, onDelete, onToggle }) => {
  return (
    <li className={`group ${task.completed ? 'bg-gray-200' : 'bg-white/80'} backdrop-blur-sm border border-gray-100 hover:border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-start gap-4">
      <div className="flex-shrink-0 pt-1">
        <label className="relative inline-flex cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="sr-only peer"
        />
        <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all duration-200 flex items-center justify-center">
          {task.completed && <Check color="white" />}
        </div>
        </label>
      </div>

      <div className="flex-1 min-w-0">
        <Link
        to={`/task/${task.id}`}
        className="block group-hover:scale-[1.01] transition-transform duration-200"
        >
        <h3
          className={`text-lg font-semibold mb-2 ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-900 hover:text-blue-700"
          } transition-colors`}
        >
          {task.title}
        </h3>
        </Link>
        <p
        className={`text-sm leading-relaxed ${
          task.completed ? "text-gray-400" : "text-gray-600"
        } line-clamp-2`}
        >
        {task.description || (
          <span className="italic text-gray-400">No description added</span>
        )}
        </p>
        <div className="flex items-center gap-2 mt-3">
        <CalendarDays color="#99a1af" width={13} height={13} />
        <span className="text-xs text-gray-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
        </div>
      </div>

      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
        title="Delete task"
        >
        <Trash2 width={16} height={16} />
        </button>
      </div>
      </div>
    </li>
  );
});

export default TaskItem;