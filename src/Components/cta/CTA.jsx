import { Link } from "react-router-dom";
import CtaBg from '../../assets/img/cta-bg.png';
import CtaImg from '../../assets/img/cta-img.png';

const CTA = () => {
  return (
    <section className="cta pt-4 isBgImg" style={{ backgroundImage: `url(${CtaBg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="ctaContent section-padding">
              <p className='fw-bold fs-14 text-white mb-3'>
                NEW COLLECTION
              </p>
              <h2 className='fs-48 fw-black text-white mb-4'>
                Discover Our Autumn Skincare
              </h2>
              <p className="fs-6 fw-medium text-clr-dark6 mb-5">
                Made using clean, non-toxic ingredients, our products are designed for everyone. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain.
              </p>
              <Link href="#" className='bg-white fs-14 px-4 py-3 fw-black text-clr-dark1 text-uppercase'>
                Explore More
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-img">
              <img src={CtaImg} alt="cta img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;