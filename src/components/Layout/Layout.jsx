// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/auth-selectors';
// import { Navigation } from 'components/Navigation/Navigation';
// import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router';
// import styles from './Layout.module.css';
// import { Box } from '@chakra-ui/react';
import { Header } from 'components/Header';

export const Layout = () => {
  // const token = useSelector(selectToken);
  return (
    <>
      <Header />
      {/* <header className={styles.header}>
        <Navigation />
        {token ? <UserMenu /> : <AuthNavigation />}
      </header> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};
