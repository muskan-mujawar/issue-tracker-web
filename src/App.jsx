import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import IssueDetails from "./issueDetails";
import Login from "./loginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issueDetails" element={<IssueDetails />} />
      </Routes>
    </Router>
  );
}
