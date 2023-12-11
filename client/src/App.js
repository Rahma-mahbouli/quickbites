import React, { Suspense, lazy, useEffect } from "react";
import { useStorage } from "./context/useStorage";
import sessionAPI from "./API/getSessionAPI";
import useOrderNotification from "./hooks/useOrderNotification";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import theme from "./theme/styles";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import OrderNotificationPopUp from "./components/OrderNotificationPopUp";
import Header from "./components/Header";
import NotFound404Page from "./components/NotFound404Page";
import SuccessfulFormModal from "./components/SuccessfulFormModal";
import ShoppingCart from "./components/shopping_cart/ShoppingCart";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import DashboardOrderDetails from "./components/dashboard/DashboardOrderDetails";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyProfile from "./components/account/MyProfile";
import EditMyProfile from "./components/account/EditMyProfile";
import UserOrdersPage from "./components/account/UserOrdersPage";
import UserOrderDetailsPage from "./components/account/UserOrderDetailsPage";
import DashboardNewProduct from "./components/dashboard/DashboardNewProduct";
import DashboardCategories from "./components/dashboard/DashboardCategories";
import DashboardOrders from "./components/dashboard/DashboardOrders";
import DashboardUsers from "./components/dashboard/DashboardUsers";
import DashboardEditProduct from "./components/dashboard/DashboardEditProduct";
import DashboardProducts from "./components/dashboard/DashboardProducts";

const EmailConfirmationModal = lazy(() =>
  import("./components/auth/EmailConfirmationModal")
);
const ResetPassword = lazy(() => import("./components/auth/ResetPassword"));

function App() {
  let {
    newOrdersCount,
    actualizationCount,
    orderActualizationMessage,
    closeActualizationNotification,
    closeNewOrderNotification,
  } = useOrderNotification();
  const {
    setToken,
    setIsNotLogin,
    setCurrentUser,
    setIsLogin,
    setIsAdmin,
    setIsModerator,
    setAllCategories,
    setIsLoading,
  } = useStorage();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/users/");
  //       const data = await response.json();
  //       const isAdmin = data.some((user) => user.name === "admin");
  //       const isModerator = data.some((user) => user.name === "moderator");
  
  //       if (isAdmin) {
  //         setIsAdmin(true);
  //       } else if (isModerator) {
  //         setIsModerator(true);
  //       }
  
  //       setIsLogin(true);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setToken("");
  //       setIsNotLogin();
  //       setIsAdmin(false);
  //       setIsModerator(false);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  

  useEffect(() => {
    const getCategoriesAPI = async () => {
      const headers = new Headers();
      headers.append("Accept", "application/json");

      const setting = {
        method: "GET",
        headers: headers,
      };
      try {
        let res = await fetch("http://localhost:7000/api/categories", setting);
        let json = await res.json();

        const { data } = json;

        setAllCategories(data);
        setIsLoading(false);
      } catch (err) {
        getCategoriesAPI();
        console.log(err);
      }
    };

    getCategoriesAPI();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <OrderNotificationPopUp
          message={orderActualizationMessage}
          notificationCount={actualizationCount}
          close={closeActualizationNotification}
        />
        <OrderNotificationPopUp
          message="Nuevos Pedidos"
          notificationCount={newOrdersCount}
          close={closeNewOrderNotification}
        />
        <SuccessfulFormModal />
        <LoadingPage />
        <ShoppingCart />
        <Header />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/authentication/login" element={<Login />} />
            <Route path="/authentication/signUp" element={<SignUp />} />
            <Route
              path="/authentication/resetPassword/:token"
              element={<ResetPassword />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/authentication/confirmation"
              component={<EmailConfirmationModal/>}
            />
            <Route path="/myAccount/myProfile" component={<MyProfile/>} />
            <Route
              path="/myAccount/editProfile"
              component={<EditMyProfile/>}
            />
            <Route
              path="/myAccount/myOrders"
              exact
              component={() => (
                <UserOrdersPage closeNotification={closeNewOrderNotification} />
              )}
            />

            <Route
              path="/myAccount/myOrders/:orderID"
              component={<UserOrderDetailsPage/>}
            />
            <Route
              path="/dashboard/myProducts"
              element={<DashboardProducts/>}
            />
            <Route
              path="/dashboard/newProduct"
              element={<DashboardNewProduct/>}
            />
            <Route
              path="/dashboard/editProduct"
              element={<DashboardEditProduct/>}
            />
            <Route path="/dashboard/users" element={<DashboardUsers/>} />
            <Route
  path="/dashboard/orders"
  exact
  element={() => (
    <DashboardOrders
      closeNotification={closeActualizationNotification}
    />
  )}
/>

 
            <Route
              path="/dashboard/orders/:orderID"
              element={<DashboardOrderDetails/>}
            />
            <Route
              path="/dashboard/categories"
              element={<DashboardCategories/>}
            />
          </Routes>
        </Suspense>
        {/* <Footer /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
