
import React from 'react';
import { toast } from 'react-toastify';
import { deleteBasket, getBasket } from '../../../api/api';
import ClothesCard from '../../../components/clothes/clothesCard/ClothesCard';
import Container from '../../../components/Container/Container';
import Loader from '../../../components/loader/Loader';
import Pagination from '../../../components/pagination/Pagination';
import { Hooks } from '../../../hooks';
import cls from "./Cart.module.scss";

function Cart() {
  const [baskets , setBaskets ] = React.useState([null]);
  const { currentUser } = Hooks.useUser();
  const [currentCart , setCurrentCart] = React.useState(0);
  const [nextDisabled , setNextDisabled] = React.useState(false);
  const [prevDisabled , setPrevDisabled] = React.useState(false);
  const [renderer , setRenderer] = React.useState("");
  const notifyDeleteCart = (cartId) => toast(`Cart ${cartId} is deleted`);

  React.useEffect(() => {
    const request = getBasket();

    request 
      .then(res => {
        setBaskets(res.data)
        setRenderer("Recover");
      })
  } , [renderer])

  const nextCart = () => {
    if(currentCart !== baskets?.length - 1) {
      setCurrentCart(prev => prev + 1)
    } else {
      setNextDisabled(true)
    }
  };

  const prevCart = () => {
    if(currentCart > 0) {
      setCurrentCart(prev => prev -1)
    } else {
      setPrevDisabled(true)
    }
  }

  React.useEffect(() => {
    if(currentCart > 0) {
      setPrevDisabled(false)
    }

    if(currentCart !== baskets?.length - 1) {
      setNextDisabled(false)
    }     
  } , [baskets , currentCart])

  const deleteCart = (id) => {
    setRenderer("Recover");
    if(id) {
      const request = deleteBasket(parseInt(id));

      request 
        .then(() => {
          notifyDeleteCart(id);
          setRenderer("Success Deleted!")
        })
    }
  }
  
  const cartProducts = baskets?.map(item => item?.products_data);

  const total = baskets[currentCart]?.total

  const goods = cartProducts[currentCart]

  const cartId = baskets[currentCart]?.id

  return (
    <Container>
      <div className={cls.cart_point}>
        <div className={cls.cart_point_header}>
          <section>
            <h2>My Cart</h2>

            {
              (goods !== undefined && goods?.length !== 0) && (
                <h3>Total summary: 
                  {
                    !total
                      ? "..."
                      : total + "$"
                  }
                </h3>
              )
            }
          </section>
          <section>
            {
              (goods !== undefined && goods?.length !== 0) && (
                <button onClick={() => deleteCart(cartId)}>Delete cart: {cartId}</button>
              )
            }
          </section>
        </div>

        {(baskets?.length === 0 &&  goods === undefined && currentUser) 
          && <p className={cls.cart_defined}>You dont have products in cart!</p>}

        {currentUser === undefined && <p>You are not Authorized!</p>}

        <div className={cls.cart_inline}>

          {!baskets && <Loader />}

          {
            baskets?.length !== 0
              ? (!goods && <Loader />)
              : null
          }

          {goods?.map(item =>(
            <ClothesCard
              isCart={true}
              key={item.id} 
              base={item}
            />
          ))}
        </div>
        {
          (        
            <Pagination
              handleNext={nextCart} 
              page={currentCart}
              nextDisabled={nextDisabled}
              prevDisabled={prevDisabled}
              handlePrev={prevCart}
            />
          )
        }

      </div>
    </Container>
  )
}

export default Cart;