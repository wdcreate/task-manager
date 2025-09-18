import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import TaskForm from "../components/TaskForm";
import { useTasksStore } from "../hooks/useTasksStore";

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTask, updateTask, deleteTask, toggleComplete } = useTasksStore();

  const task = id ? getTask(id) : undefined;

  const [editing, setEditing] = useState(false);

  if (!task) {
    return (
      <Layout>
        <div className="bg-white rounded-md p-6 shadow-sm text-center">
          <h3 className="text-lg font-medium">Task not found</h3>
          <div className="mt-4">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md"
            >
              Back
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white rounded-md p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1
              className={`text-2xl font-semibold ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Created: {new Date(task.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="flex gap-2 flex-col md:flex-row ">
            <button
              onClick={() => toggleComplete(task.id)}
              className="px-3 py-1 border rounded-md"
            >
              {task.completed ? "Mark incomplete" : "Mark complete"}
            </button>
            <button
              onClick={() => {
                deleteTask(task.id);
                navigate("/");
              }}
              className="px-3 py-1 border rounded-md text-red-600"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="mt-4">
          {!editing ? (
            <>
              <div className="text-gray-700 whitespace-pre-wrap">
                {task.description || (
                  <span className="italic text-gray-400">No description</span>
                )}
              </div>
              <div className="mt-4">
                <button
                  onClick={() => setEditing(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="ml-2 px-4 py-2 border rounded-md"
                >
                  Back
                </button>
              </div>
            </>
          ) : (
            <div className="mt-2">
              <TaskForm
                initial={{ title: task.title, description: task.description }}
                onSubmit={(title, description) => {
                  updateTask(task.id, { title, description });
                  setEditing(false);
                }}
                submitLabel="Update"
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TaskDetailsPage;
