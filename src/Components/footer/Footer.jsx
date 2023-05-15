import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/img/footer-logo.svg';
import googlepayLogo from '../../assets/img/googlepay.svg';
import MasterLogo from '../../assets/img/mastercard.svg';
import paypalLogo from '../../assets/img/paypal.svg';
import VisaLogo from '../../assets/img/visa.svg';
import './footer.scss';

const Footer = () => {

  const footerMenuContent = [
    {
      menuTitle: "About CosmetiX ",
      menuList: [
        {
          menuName: "Career",
          path: "/career"
        },
        {
          menuName: "Stocklist",
          path: "/stocklist"
        },
        {
          menuName: "Contact",
          path: "/contact"
        },
        {
          menuName: "Terms & Conditions",
          path: "/terms"
        },
      ]
    },

    {
      menuTitle: "Get to Know Us",
      menuList: [
        {
          menuName: "Blog",
          path: "/blog"
        },
        {
          menuName: "About Amazon",
          path: "/aboutamazon"
        },
        {
          menuName: "Investor Relations",
          path: "/investorrelations"
        },
        {
          menuName: "Privacy Policy",
          path: "/privacypolicy"
        },
      ]
    },

    {
      menuTitle: "Let Us Help You",
      menuList: [
        {
          menuName: "Make Money with Us",
          path: "/makemoney"
        },
        {
          menuName: "Become an Affiliate",
          path: "/affiliate"
        },
        {
          menuName: "Advertise Your Products",
          path: "/advertiseproducts"
        },
        {
          menuName: "Shipping Rates & Policies",
          path: "/shippingpolicies"
        },
        {
          menuName: "Returns & Replacements",
          path: "/returnsreplacements"
        },
      ]
    },

    {
      menuTitle: "Help",
      menuList: [
        {
          menuName: "Shipping & Returns",
          path: "/shippingreturns"
        },
        {
          menuName: "Track Order",
          path: "/trackorder"
        },
        {
          menuName: "FAQ",
          path: "/faq"
        },
        {
          menuName: "Support",
          path: "/support"
        },

      ]
    },

  ]

  return (
    <footer className='bg-clr-dark1'>
      <div className='container'>
        <div className='row section-padding'>
          <div className='col-xl-4 col-12'>
            <div className='footer-widget pe-xl-4 mb-5 mb-xl-0'>
              <Link to='/' className='d-block mb-4'>
                <img src={FooterLogo} alt='logo' />
              </Link>
              <p className='fs-14 fw-medium text-clr-dark6 mb-4'>
                Create a captivating CV or resuming no time! Midcareer has all the elements may need
              </p>
              <div className="form-group position-relative">
                <input type="email" className='form-control rounded-pill border-0' placeholder='Email address' />
                <button type='submit' className='submit-btn border-0 px-4 py-2 bg-clr-green rounded-pill fw-black text-white position-absolute'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          {
            footerMenuContent?.map((footerMenu, index) => {

              return <div className="col-xl-2 col-md-4 col-6" key={index}>
                <div className="footer-widget-menu mb-5 mb-xl-0">
                  <h4 className="widget-title fs-6 fw-black text-white mb-4">
                    {footerMenu.menuTitle}
                  </h4>
                  <ul className='list-unstyled mb-0'>
                    {
                      footerMenu.menuList.map((menu, index) => {
                        return <li className='mb-3' key={index}>
                          <Link to={menu.path} className='transition-2 text-clr-dark6 fs-14 fw-medium' key={index}>
                            {menu.menuName}
                          </Link>
                        </li>
                      })
                    }

                  </ul>
                </div>
              </div>

            })
          }



        </div>
      </div>
      <div className="footer-bottom brt1 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className='text-clr-dark6 fs-14 fw-medium text-center text-md-start mb-3 mb-md-0'>
                Copyright © 2023 Cosmetix. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className='list-unstyled mb-0 d-flex gap-3 justify-content-center align-items-center justify-content-md-end'>
                <li>
                  <a href="#">
                    <img src={VisaLogo} alt="brand logo" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={MasterLogo} alt="brand logo" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={paypalLogo} alt="brand logo" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={googlepayLogo} alt="brand logo" className="img-fluid" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;