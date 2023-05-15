import { Link } from "react-router-dom";
import Slider from "react-slick";
import arrowIcon from '../../assets/img/arrow-right.svg';
import BannerImages from '../../assets/img/banner-img.png';
import BannerImages2 from '../../assets/img/banner-img2.png';
import './banner.scss';


const Banner = () => {
  const items = [
    {
      id: 1,
      title: "Healthy skin can’t be <span class='text-clr-green'>rushed.</span>",
      desc: "Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.",
      bannerImg: BannerImages
    },
    {
      id: 2,
      title: "Can’t be rushed.",
      desc: "Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.",
      bannerImg: BannerImages2
    },
    {
      id: 3,
      title: "Healthy skin ",
      desc: "Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget.",
      bannerImg: BannerImages
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  return (

    <div className="banner">
      <Slider {...settings}>
        {items.map((item) => (
          <div className="banner-slide position-relative" key={item.id}>
            <div className="container">
              <div className="row banner-row align-items-center">
                <div className="col-lg-8">
                  <div className="banner-content ">
                    <h1 className="banner-title fs-90 fw-black text-clr-dark1 mb-4" dangerouslySetInnerHTML={{ __html: item.title }}></h1>
                    <p className="fs-5 fw-normal text-clr-dark3 mb-4 pb-3">
                      {item.desc}
                    </p>
                    <Link href="#" className='bg-clr-green px-4 py-3 fw-black text-white d-inline-flex gap-2 align-items-center text-uppercase'>
                      SHOP NOW
                      <img src={arrowIcon} alt="icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-img position-absolute bottom-0 end-0">
              <img src={item.bannerImg} alt="banner image" className="img-fluid" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;




// import React, { Component } from "react";
// import Slider from "react-slick";
// import { baseUrl } from "./config";

// export default class Fade extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       fade: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div >
//         <Slider {...settings}>
//           <div>
//             <img src={baseUrl + "/abstract01.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract02.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract03.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract04.jpg"} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }