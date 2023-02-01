import { Outlet } from 'react-router';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header as="header" />
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer as="footer" />
      </footer>
    </>
  );
};
