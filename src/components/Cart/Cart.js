import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';



const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = useSelector(state => state.cart.totalCartPrice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price
            }}
          />
        ))}

      </ul>
      <p>Total Cost: ${totalCost}</p>
    </Card>
  );
};

export default Cart;
