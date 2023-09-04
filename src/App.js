import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import TemplatesPage from "./pages/templates/templatesPage";
import EditorPage from './pages/editor/editorPage'
import PreviewPage from "./pages/preview/previewPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<LoginPage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
