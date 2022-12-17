import "./App.css";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { OnboardingLayout } from "./pages/onboarding";
import { Authorize, Welcome } from "./pages";
import Navbar from "./components/ui/navbar";

function App() {
  return (
    <Router>
      <Routes>
      <Route element={<div style={{ background: 'red' }} ><Navbar/> <Outlet /> </div>}>
        <Route path="/" element={<Welcome />} />
        <Route path="authorize" element={<Authorize/>} />
        <Route path='movies' element={<>movies</>}/>
        <Route path='shows' element={<>shows</>}/>
        <Route path="/onboarding/*" element={<OnboardingLayout />}>
      </Route>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
