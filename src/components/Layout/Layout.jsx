import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <header>
        <Navigation />
        {token ? <UserMenu /> : <AuthNavigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
