import "./App.css";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { OnboardingLayout } from "./pages/onboarding";
import { Authorize, Welcome } from "./pages";
import Navbar from "./components/ui/navbar";
import { Profile, ProfileLayout } from "./pages/profile";
import Details from "./pages/Details";
import { Error404 } from "./pages/Error404";

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
          <Route path="profile/*" element={<ProfileLayout/>}>
            <Route path="overview" element={<Profile />} />
          </Route>
          <Route path="details/:movieId" element={<Details />}/>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
