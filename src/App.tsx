import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OnboardingLayout } from "./pages/onboarding";
import { Authorize, Welcome } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/authorize" element={<Authorize/>} />
      <Route path="/onboarding/*" element={<OnboardingLayout />}>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
