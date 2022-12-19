import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { OnboardingLayout } from "./pages/onboarding";
import { Authorize, Welcome } from "./pages";
import Navbar from "./components/ui/navbar";
import { Profile, ProfileLayout } from "./pages/profile";
import Details from "./pages/Details";

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
          <Route path="details/:film_type/:film_id" element={<Details />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
