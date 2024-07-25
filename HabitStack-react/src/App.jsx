import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import PillarsRoute from "./routes/pillars/pillars.component";
import ProfileRoute from "./routes/profile/profile.component";
import StacksRoute from "./routes/stacks/stacks.component";
import AddRoute from "./routes/add/add.component";
import Authentication from "./routes/authentication/authentication.component";
import PrivateRoutes from "./components/private-route/private-route.component";

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route element={<StacksRoute />} path="stacks" />
          <Route element={<AddRoute />} path="add-stack" />
          <Route element={<PillarsRoute />} path="pillars" />
          <Route element={<ProfileRoute />} path="profile" />
        </Route>
      </Route>
      <Route path="/login" element={<Authentication />}></Route>
    </Routes>
  );
};

export default App;
