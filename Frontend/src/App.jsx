import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/redux/appStore";
import Home from "./components/Home";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import PendingRequests from "./components/PendingRequests";
import About from "./components/About";
import Chat from "./components/Chat";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

//Separate component so we can use useSelector inside
function MainRoutes() {
  const user = useSelector((state) => state.user); // adjust to your slice path

  return (
    <Routes>
      <Route path="/" element={<Body />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* Protected routes (only if user exists) */}
        {user && (
          <>
            <Route path="profile" element={<Profile />} />
            <Route path="feed" element={<Feed />} />
            <Route path="/received" element={<PendingRequests />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat/:targetUserId" element={<Chat/>} />
          </>
        )}

        {/*redirect any unknown path to home */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
