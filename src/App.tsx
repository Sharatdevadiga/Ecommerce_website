import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wrapper from "./components/layouts/Wrapper";
import Loader from "./components/ui/Loader";
import PlaceOrder from "./pages/PlaceOrder";
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
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
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishList" element={<WishListPage />} />
            <Route path="/user" element={<ProfilePage />} />
            <Route path="/search/:query" element={<SearchResultsPage />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Wrapper>
      </Suspense>
    </Router>
  );
}

export default App;
