import { Route, HashRouter as Router, Routes } from "react-router-dom";

import App from "./App";
import NotificationForm from "./components/NotificationForm";
import UserProfileForm from "./components/UserProfileForm";
import MiniDrawer from "./layouts/drawer-layout";

const RouterComponent: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MiniDrawer />}>
          <Route index element={<NotificationForm />} />
          <Route path="/user-profile-form" element={<UserProfileForm />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default RouterComponent;
