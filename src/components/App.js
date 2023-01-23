// import { ContactsList } from './ContactsList/ContactsList';
// import Form from './Form/Form';
// import Filter from './Filter/Filter';

// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { LoginForm } from './LoginForm/LoginForm';
// import { UserMenu } from './UserMenu/UserMenu';

// export default function App() {
//   return (
//     <>
//       <UserMenu />
//       <RegisterForm />
//       <LoginForm />
//       <h1
//         style={{
//           margin: 15,
//         }}
//       >
//         Phonebook
//       </h1>
//       <Form />
//       <h2
//         style={{
//           margin: 15,
//         }}
//       >
//         Contacts
//       </h2>
//       <Filter />
//       <ContactsList />
//     </>
//   );
// }
import { Routes, Route } from 'react-router';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={HomePage} />
        <Route path="contacts" element={ContactsPage} />
        <Route path="register" element={RegisterPage} />
        <Route peth="login" element={LoginPage} />
      </Route>
    </Routes>
  );
};
