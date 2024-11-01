import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Wrapper = lazy(() => import("./components/layouts/Wrapper"));
const Loader = lazy(() => import("./components/ui/Loader"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const UserSignupPage = lazy(() => import("./pages/UserSignupPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const WishListPage = lazy(() => import("./pages/WishlistPage"));
const SearchResultsPage = lazy(() => import("./pages/SearchResultsPage"));

function App(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Wrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<UserSignupPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishList" element={<WishListPage />} />
            <Route path="/user" element={<ProfilePage />} />
            <Route path="/search/:query" element={<SearchResultsPage />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Wrapper>
      </Suspense>
    </Router>
  );
}

export default App;
