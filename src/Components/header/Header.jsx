
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import arrowIcon from '../../assets/img/arrow-right.svg';
import CartIcon from '../../assets/img/cart-icon.svg';
import Logo from '../../assets/img/logo.svg';
import LoveIcon from '../../assets/img/love-icon.svg';
import SearchIcon from '../../assets/img/search-icon.svg';
import UserIcon from '../../assets/img/user-icon.svg';
import useGlobalState from '../../hooks/useGlobalState';

import './header.scss';

const Header = () => {

  const headerMenu = [
    {
      menuName: "Home",
      path: "/",
    },
    {
      menuName: "Products",
      path: "/products",
    },
    {
      menuName: "About us",
      path: "/about",
    },
    {
      menuName: "Blog",
      path: "/blog",
    },
    {
      menuName: "Contact us",
      path: "/contact",
    },

  ]

  const { showCartSidebar, setShowCartSidebar } = useGlobalState();

  console.log(showCartSidebar)


  return (
    <div className='mainMenu'>
      <div className='headerTop bg-clr-yellowLight py-12 brb1'>
        <div className='d-flex align-items-center gap-3 justify-content-center flex-wrap'>
          <p className='text-clr-dark3 fw-medium fs-6'>
            Free shipping on all U.S. orders $50+
          </p>
          <Link className='bg-clr-yellow px-3 py-1 fw-black text-white d-flex gap-2 align-items-center'>
            Discover More
            <img src={arrowIcon} alt="icon" />
          </Link>
        </div>
      </div>
      <Navbar bg="white py-3" expand="lg">
        <Container className='align-items-start align-items-lg-center'>
          <div className="header-left d-lg-flex">
            <Navbar.Brand>
              <Link to='/'>
                <img src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            {/* <Navbar.Toggle /> */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto pt-3 pt-lg-0">
                {
                  headerMenu?.map((menu, index) => {
                    return <Nav.Link className='fs-6 text-clr-dark3 fw-medium px-lg-3 text-capitalize' as={NavLink} key={index} to={menu.path}>
                      {menu?.menuName}
                    </Nav.Link>
                  })
                }
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className='header-right ms-auto d-flex align-items-center gap-3 gap-lg-4'>
            <button className='btn p-0 border-0'>
              <img src={SearchIcon} alt="icon" />
            </button>
            <button className='btn p-0 border-0 d-none d-lg-inline-block'>
              <img src={UserIcon} alt="icon" />
            </button>
            <button className='btn p-0 border-0 d-none d-lg-inline-block'>
              <img src={LoveIcon} alt="icon" />
            </button>
            <button className='btn p-0 border-0 position-relative' onClick={() => setShowCartSidebar(true)}>
              <img src={CartIcon} alt="icon" />
              <span className='cart-qty position-absolute top-0'>
                0
              </span>
            </button>
            <Navbar.Toggle className='p-2 border-0' />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;