import Navigation from '../navigation/Navigation';

import { Container, Avatar, UserTitle, ArrowDownStyled } from './SidebarStyles';

import avatar from '../../assets/user-avatar.jpg';
import { useAppSelector } from '../../store/store';
import { selectUser } from '../../store/authSlice';

const Sidebar = () => {
  const user = useAppSelector(selectUser);

  return (
    <Container>
      <Avatar src={avatar} />
      <UserTitle>
        {`${user?.firstName} ${user?.lastName}`}
        <ArrowDownStyled />
      </UserTitle>
      <Navigation />
    </Container>
  );
};

export default Sidebar;
