import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <Breadcrumb p="2" fontWeight="medium" fontSize="l">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {token && (
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="contacts">
            Contacts
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     {token && (
    //       <li>
    //         <NavLink to="contacts">Contacts</NavLink>
    //       </li>
    //     )}
    //   </ul>
    // </nav>
  );
};
