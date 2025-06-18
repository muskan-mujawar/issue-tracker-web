import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import IssueDetails from "./issueDetails";
import Login from "./loginPage";
import MainPage from "./mainPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issueDetails" element={<IssueDetails />} />
        <Route path="/mainPage/:id" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
