import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import UserPrivateRoutes from "./components/PrivateRoutes/UserPrivateRoutes";
import ArtistPrivateRoutes from "./components/PrivateRoutes/ArtistPrivateRoutes";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<SignUpScreen />} />
          <Route path="" element={<UserPrivateRoutes />}>
            {/* <Route path="/cart" element={<CartScreen />} /> */}
          </Route>
          <Route path="" element={<ArtistPrivateRoutes />}>
            <Route path="/cart" element={<CartScreen />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
