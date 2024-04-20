import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
// import SignIn from "./pages/Account/SignIn";
// import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Shipping from "./pages/Shipping/Shipping";
// import Offer from "./pages/Offer/Offer";
// import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import CurrencySelection from "./components/home/Header/PopupCurrency";
import { setupAxiosInterceptors } from "./config/axios-interceptor";
import ShippingScheduleNotice from "./components/home/Header/ShippingSchedule";
import NotFoundPage from "./pages/404/NotFound";
import MaintenancePage from "./pages/MT/mt";
import { useEffect } from "react";

const Layout = () => {
  return (
    <div>
      <Header />
      <CurrencySelection />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
      <ShippingScheduleNotice />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />} title="Homepage" />
        <Route path="/shop" element={<Shop />} title="Shopping" />
        <Route path="/about" element={<About />} title="About us" />
        <Route path="/contact" element={<Contact />} title="Contact us" />
        <Route path="/shipping" element={<Shipping />} title="Shipping" />
        {/* ==================== Header Navlink End here ===================== */}
        {/* <Route path="/offer" element={<Offer />} /> */}
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/paymentgateway" element={<Payment />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} /> */}
      <Route path="/maintenance" element={<MaintenancePage />} />
    </Route>
  )
);

function App() {
  setupAxiosInterceptors();
  useEffect(() => {
    const redirectedFromMaintenance = localStorage.getItem('refreshedOnMaintenance');
    if (redirectedFromMaintenance) {
      localStorage.removeItem('refreshedOnMaintenance');
      if (window.location.pathname === '/maintenance') {
        window.location.href = '/';
      }
    }
  }, []);
  return (
    <div className="font-bodyFont bg-primeColor">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
