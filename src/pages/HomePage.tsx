import React, { useState, useMemo } from "react";
import Layout from "../components/Layout";
import TaskList from "../components/TaskList";
import SearchInput from "../components/SearchInput";
import { useTasksContext } from "../context/tasksContext";
import { useDebounce } from "../hooks/useDebounce";

const HomePage: React.FC = () => {
  const { tasks, deleteTask, toggleComplete } = useTasksContext();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredTasks = useMemo(() => {
    const q = debouncedSearchQuery.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }, [tasks, debouncedSearchQuery]);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Tasks</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        <div className="max-w-md mx-auto">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search tasks by title or description..."
          />
        </div>

        {debouncedSearchQuery && (
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Found {filteredTasks.length} task
              {filteredTasks.length !== 1 ? "s" : ""} matching "
              {debouncedSearchQuery}"
            </p>
          </div>
        )}

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleComplete}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
