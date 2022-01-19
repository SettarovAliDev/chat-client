import { useAppDispatch } from '../../store/store';
import { logoutUser } from '../../store/authSlice';

import {
  MenuNav,
  MenuList,
  MenuItem,
  MenuLink,
  menuIcon,
} from './NavigationStyles';

import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Chat } from '../../assets/chat.svg';
import { ReactComponent as Contact } from '../../assets/contact.svg';
import { ReactComponent as Notifications } from '../../assets/notifications.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';

const HomeIcon = menuIcon(Home);
const ChatIcon = menuIcon(Chat);
const ContactIcon = menuIcon(Contact);
const NotificationsIcon = menuIcon(Notifications);
const CalendarIcon = menuIcon(Calendar);
const SettingsIcon = menuIcon(Settings);
const LogoutIcon = menuIcon(Logout);

const Navigation = () => {
  const dispatch = useAppDispatch();

  const onHandleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <MenuNav>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">
            <HomeIcon />
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/chat">
            <ChatIcon />
            Chat
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contact">
            <ContactIcon />
            Contact
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/notifications">
            <NotificationsIcon />
            Notifications
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/calendar">
            <CalendarIcon />
            Calendar
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/settings">
            <SettingsIcon />
            Settings
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink onClick={onHandleLogout} to="/sign-in">
            <LogoutIcon />
            Logout
          </MenuLink>
        </MenuItem>
      </MenuList>
    </MenuNav>
  );
};

export default Navigation;
