import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authorize, Layout, Welcome } from "./pages";
import { Lists, Profile, ProfileLayout } from "./pages/profile";
import Details from "./pages/Details";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Welcome />} />
          <Route path="authorize" element={<Authorize />} />
          <Route path="profile/*" element={<ProfileLayout/>}>
            <Route path="overview" element={<Profile />} />
            <Route path="lists" element={<Lists />} />
          </Route>
          <Route path="details/:film_type/:film_id" element={<Details />}/>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
