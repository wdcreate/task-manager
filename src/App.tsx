import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task/:id" element={<TaskDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
