import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, OnboardingLayout } from "./pages/onboarding";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
        <Route path="/onboarding/*" element={<OnboardingLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
