import { Fragment, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';

import EntireApp from './pages/entire-app/EntireApp';
import Calendar from './pages/calendar/Calendar';
import Chat from './pages/chat/Chat';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Notifications from './pages/notifications/Notifications';
import Settings from './pages/settings/Settings';
import SignIn from './pages/sign-in-up/SignIn';
import SignUp from './pages/sign-in-up/SignUp';
import PageNotFound from './pages/page-not-found/PageNotFound';

import { useAppDispatch, useAppSelector } from './store/store';
import { loginUserByToken, selectIsAuth } from './store/authSlice';

import { GlobalStyles } from './GlobalStyles';

const App = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    if (localStorage.getItem('token')) dispatch(loginUserByToken());
  }, [dispatch]);

  return (
    <Fragment>
      <Global styles={GlobalStyles} />
      <Routes>
        {isAuth ? (
          <Route path="/" element={<EntireApp />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        ) : (
          <Route path="/" element={<Navigate to="/sign-in" />} />
        )}
        <Route
          path="/sign-in"
          element={isAuth ? <Navigate to="/chat" /> : <SignIn />}
        />
        <Route
          path="/sign-up"
          element={isAuth ? <Navigate to="/chat" /> : <SignUp />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
