import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authorize, Details, Error404, Home, Layout } from "./pages";
import { Lists, Profile, ProfileLayout } from "./pages/profile";
import Logout from "./pages/profile/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="authorize" element={<Authorize />} />
          <Route path="profile/*" element={<ProfileLayout/>}>
            <Route path="overview" element={<Profile />} />
            <Route path="lists" element={<Lists />} />
            <Route path='logout' element={<Logout />} />
          </Route>
          <Route path="details/:film_type/:film_id" element={<Details />}/>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
