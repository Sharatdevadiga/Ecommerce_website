import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import Wrapper from "./components/layouts/Wrapper";
import CategoryPage from "./pages/CategoryPage";
import PageNotFound from "./pages/PageNotFound";
import WishListPage from "./pages/WishlistPage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App(): JSX.Element {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishList" element={<WishListPage />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route path="/search/:query" element={<SearchResultsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
