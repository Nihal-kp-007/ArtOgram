import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import UserPrivateRoutes from "./components/PrivateRoutes/UserPrivateRoutes";
import ArtistPrivateRoutes from "./components/PrivateRoutes/ArtistPrivateRoutes";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import WishListScreen from "./screens/WishListScreen";
import ArtistDetailScreen from "./screens/ArtistDetailScreen";
import ShippingScreen from "./screens/ShippingScreen";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<SignUpScreen />} />
          <Route path="/productinfo/:id" element={<ProductDetailScreen />} />
          <Route path="/artistdetails" element={<ArtistDetailScreen />} />
          <Route path="" element={<UserPrivateRoutes />}>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/wishlist" element={<WishListScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
          </Route>
          <Route path="" element={<ArtistPrivateRoutes />}>
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
