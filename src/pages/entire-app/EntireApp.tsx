import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/sidebar/Sidebar';

import { Container, MainContent } from './EntireAppStyles';

const EntireApp = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default EntireApp;
