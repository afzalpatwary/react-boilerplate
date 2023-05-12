import { Link } from "react-router-dom";
import arrowIcon from '../../assets/img/arrow-right.svg';
import './banner.scss';


const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row banner-row align-items-center">
          <div className="col-lg-7">
            <div className="banner-content ">
              <h1 className="banner-title fs-90 fw-black text-clr-dark1 mb-4">
                Healthy skin <br className="d-none d-lg-inline" />
                can’t be <span className="text-clr-green">rushed.</span>
              </h1>
              <p className="fs-5 fw-normal text-clr-dark3 mb-4 pb-3">
                Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
              </p>

              <Link className='bg-clr-green px-4 py-3 fw-black text-white d-inline-flex gap-2 align-items-center text-uppercase'>
                SHOP NOW
                <img src={arrowIcon} alt="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;