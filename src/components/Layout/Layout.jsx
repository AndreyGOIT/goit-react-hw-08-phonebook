import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';
// import { Box } from '@chakra-ui/react';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    // <>
    //   <header>
    //     <Box
    //       display="flex"
    //       justifyContent="space-between"
    //       p={2}
    //       w="100%"
    //       bg="lightblue"
    //     >
    //       <Navigation />
    //       {token ? <UserMenu /> : <AuthNavigation />}
    //     </Box>
    //   </header>
    //   <main>
    //     <Outlet />
    //   </main>
    // </>
    <>
      <header className={styles.header}>
        <Navigation />
        {token ? <UserMenu /> : <AuthNavigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
