import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { NotificationPage } from "./pages/notification";
import { HomePage } from "./pages/home";
import NotificationPage from "./pages/notification";
export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notification" element={<NotificationPage />} />
        </Routes>
      </Router>
    </>
  );
};
