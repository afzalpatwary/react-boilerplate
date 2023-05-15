
import { Link } from 'react-router-dom';
import CategorieImg1 from '../../assets/img/categorieImg1.png';
import CategorieImg2 from '../../assets/img/categorieImg2.png';
import CategorieImg3 from '../../assets/img/categorieImg3.png';
import CategorieImg4 from '../../assets/img/categorieImg4.png';
import CategorieImg5 from '../../assets/img/categorieImg5.png';
import './categories.scss';


const Categories = () => {

  const categoriesContent = [
    {
      categorieImage: CategorieImg1,
      categorieName: "Skin care",
      path: "/skincare"
    },
    {
      categorieImage: CategorieImg2,
      categorieName: "Hair care",
      path: "/haircare"
    },
    {
      categorieImage: CategorieImg3,
      categorieName: "Gifts set",
      path: "/giftsset"
    },
    {
      categorieImage: CategorieImg4,
      categorieName: "Makeup",
      path: "/makeup"
    },
    {
      categorieImage: CategorieImg5,
      categorieName: "Body care",
      path: "/bodycare"
    },
  ]

  

  return (
    <section className="categories bg-white section-padding">
      <div className="container">
        <div className="mb-4 pb-2">
          <h2 className='section-title fs-3 fw-black text-clr-dark1 mt-0'>
            Shop by Categories
          </h2>
        </div>
        <div className="categoriesItems">
          {
            categoriesContent.map((category, index) => {
              return <div className="singleCategory" key={index}>
                <Link to={category.path} className='categoryImg position-relative d-block'>
                  <img src={category.categorieImage} alt="categorieImage" className="img-fluid w-100" />
                  <h4 className='categorieName position-absolute fs-5 fw-bold text-clr-dark1'>
                    {category.categorieName}
                  </h4>
                </Link>
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Categories;