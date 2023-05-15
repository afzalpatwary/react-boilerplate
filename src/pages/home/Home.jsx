import CartSidebar from '../../Components/cartSidebar/CartSidebar.jsx'
import Banner from '../../Components/banner/Banner.jsx'
import Categories from '../../Components/categories/Categories.jsx'
import BestSeller from '../../Components/bestSeller/BestSeller.jsx'
import CTA from '../../Components/cta/CTA.jsx';


const Home = () => {
  return (
    <div>
      <CartSidebar />
      <Banner />
      <Categories />
      <BestSeller />
      <CTA />
    </div>
  );
};

export default Home;