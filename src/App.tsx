import "./App.css";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { OnboardingLayout } from "./pages/onboarding";
import { Authorize, Welcome } from "./pages";
import Navbar from "./components/ui/navbar";
import { Profile, ProfileLayout } from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<>
            <Navbar />
            <Outlet /> 
          </>}>
          <Route path="/" element={<Welcome />} />
          <Route path="authorize" element={<Authorize />} />
          <Route path='movies' element={<>movies</>} />
          <Route path='shows' element={<>shows</>} />
          <Route path="profile/*" element={<ProfileLayout/>}>
            <Route path="overview" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
