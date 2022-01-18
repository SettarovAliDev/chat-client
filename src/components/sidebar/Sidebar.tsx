import Navigation from '../navigation/Navigation';

import { Container, Avatar, UserTitle, ArrowDownStyled } from './SidebarStyles';

import avatar from '../../assets/user-avatar.jpg';

const Sidebar = () => {
  return (
    <Container>
      <Avatar src={avatar} />
      <UserTitle>
        Henry Jabbawockiez
        <ArrowDownStyled />
      </UserTitle>
      <Navigation />
    </Container>
  );
};

export default Sidebar;
