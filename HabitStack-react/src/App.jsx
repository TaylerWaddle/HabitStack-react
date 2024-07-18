import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import PillarsRoute from "./routes/pillars/pillars.component";
import ProfileRoute from "./routes/profile/profile.component";
import StacksRoute from "./routes/stacks/stacks.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route element={<PillarsRoute />} path="pillars" />
        <Route element={<ProfileRoute />} path="profile" />
        <Route element={<StacksRoute />} path="stacks" />
      </Route>
    </Routes>
  );
};

export default App;
