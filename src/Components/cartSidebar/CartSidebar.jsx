import useGlobalState from '../../hooks/useGlobalState';
import './cartsidebar.scss';


const CartSidebar = () => {

  const { showCartSidebar, setShowCartSidebar } = useGlobalState();


  return (
    <div className={`cartSidebar p-4 ${showCartSidebar && "active"}`}>
      <button type='button' className='btn bg-dark text-white' onClick={() => setShowCartSidebar(false)}>Close</button>
      <h3 className='py-4'>
        Cart Sidebar
      </h3>
    </div>
  );
};

export default CartSidebar;