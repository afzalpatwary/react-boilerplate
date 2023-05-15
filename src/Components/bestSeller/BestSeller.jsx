import { Link } from 'react-router-dom';
import { ProductList } from '../../Data';
import IconLove from '../../assets/img/IconLove.svg';
import ArrowLeft from '../../assets/img/arrow-lefts.svg';
import ArrowRight from '../../assets/img/arrow-right.svg';
import bagIcon from '../../assets/img/bagIcon.svg';
import disableStarIcon from '../../assets/img/disable-star.svg';
import starIcon from '../../assets/img/star-icon.svg';
import './bestSeller.scss';

const BestSeller = () => {

  return (
    <section className='bestSeller section-padding bg-clr-primary10'>
      <div className="container">
        <div className="mb-4 pb-2">
          <h2 className='section-title fs-3 fw-black text-clr-dark1 mt-0'>
            Best Seller
          </h2>
        </div>
        <div className="row">


          {
            ProductList?.map((product, index) => {
              return (
                <div className="col-xl-4 col-sm-6" key={index}>
                  <div className="bestSellerItem mb-4">
                    <div className="productImage bg-white p-2 text-center position-relative mb-4">
                      <img src={product.productImg} alt="ProductImg" className="img-fluid" />
                      <span>
                        {product?.sticker && <span className={`${product?.bgClr} sticker position-absolute py-2 px-3 fs-12 fw-bold text-center text-white`}>
                          {product?.sticker}
                        </span>}
                        {product?.sticker && <span className={`${product?.cornerBg} stickerLeft position-absolute`}></span>}
                      </span>
                      <div className="afterHover rgbaBG1 position-absolute start-0 end-0 top-0 bottom-0 m-2 d-flex align-items-center justify-content-center">
                        <div className="icons">
                          <Link href="#">
                            <img src={IconLove} alt="iconLove" className="iconLove position-absolute img-fluid " />
                          </Link>
                          <Link href="#" className="arrow">
                            <img src={ArrowRight} alt="iconLove" className="ArrowRight position-absolute img-fluid " />
                            <img src={ArrowLeft} alt="iconLove" className="ArrowLeft position-absolute img-fluid " />
                          </Link>
                        </div>
                        <div className="hoverBtn">
                          <button type='button' className='bg-clr-dark7 border-0 px-4 py-3 fw-black fs-14 text-clr-green d-inline-flex gap-2 align-items-center text-uppercase'>
                            <img src={bagIcon} alt="icon" className='img-fluid' />
                            Add to Card
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="productBody">
                      <Link to="#" className='productCategory fs-14 fw-medium text-clr-dark3 d-block mb-3'>
                        {product.productCategory}
                      </Link>
                      <h3 className='fs-6 fw-bold text-clr-dark1 mb-2'>
                        {product.productTitle}
                      </h3>
                      <div className="ratting d-flex gap-1 align-items-center mb-3">
                        <img src={starIcon} alt="star icon" className="img-fluid" />
                        <img src={starIcon} alt="star icon" className="img-fluid" />
                        <img src={starIcon} alt="star icon" className="img-fluid" />
                        <img src={starIcon} alt="star icon" className="img-fluid" />
                        <img src={disableStarIcon} alt="disable star icon" className="img-fluid" />
                        <span className="outOfRatting text-clr-dark4 fs-12 fw-normal ms-1">
                          48 reviews
                        </span>
                      </div>
                      <div className="pricing d-flex gap-3 align-items-center">
                        <span className='price fs-6 fw-black text-clr-green'>
                          {product.price}
                        </span>
                        <span className='old-price fs-6 fw-normal text-clr-green text-decoration-line-through'>
                          {product.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>
      </div>
    </section>
  );
};

export default BestSeller;