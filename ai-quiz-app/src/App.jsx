import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* User Panel */}
        <Route path="/user" element={<UserDashboard />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Quiz Page */}
        <Route path="/quiz" element={<QuizPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;