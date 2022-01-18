import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

import EntireApp from './pages/entire-app/EntireApp';
import Authentication from './pages/authentication/Authentication';
import Calendar from './pages/calendar/Calendar';
import Chat from './pages/chat/Chat';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Notifications from './pages/notifications/Notifications';
import Settings from './pages/settings/Settings';
import SignIn from './pages/sign-in-up/SignIn';
import SignUp from './pages/sign-in-up/SignUp';

import { GlobalStyles } from './GlobalStyles';

const App = () => {
  return (
    <Fragment>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<EntireApp />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </Fragment>
  );
};

export default App;
