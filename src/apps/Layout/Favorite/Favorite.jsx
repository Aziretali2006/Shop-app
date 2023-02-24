
import React from 'react';
import { DeleteFavorite, getFavorites } from '../../../api/api';
import ClothesCard from '../../../components/clothes/clothesCard/ClothesCard';
import Container from '../../../components/Container/Container';
import Loader from '../../../components/loader/Loader';
import { Hooks } from '../../../hooks';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import cls from "./Favorite.module.scss";

function Favorite(isFavorite) {
  const { product } = Hooks.useLayout();
  const [favoriteProducts , setfavoriteProducts] = React.useState(null);
  const { currentUser } = Hooks.useUser();
  const notify = () => toast("Product is deleted");
  const [renderer , setRenderer] = React.useState("text");


  React.useEffect(() => {
    const request = getFavorites();

    request
      .then(res => {
        setfavoriteProducts(res.data)
        setRenderer("recover")
      })
  } , [renderer])

  const favorites = [];

  product?.forEach(element => {
    favoriteProducts?.forEach(item => {
      if(element?.id === item.product) {
        favorites.push({
          ...element,
          deletedId: item.id
        })
      }
    })
  })

  const handleDeleteFavorite = (id) => {
    if(id) {
      const request = DeleteFavorite(parseInt(id));
      setRenderer("Success recover!")

      request
        .then(() => {
          notify();
          setRenderer("Success Delete!")
        })
    }
  }

  return (
    <Container>
      <div className={cls.favorite_point}>
        <h2>My favorites</h2>

        <div className={cls.favorite_inline}>
          {(favorites?.length === 0 && currentUser) && <p>You dont have favorite products!</p>}

          {currentUser === undefined && <p>You are not Authorized!</p>}

          {!favoriteProducts && <Loader />}

          {favorites?.map(item => 
            <ClothesCard 
              handleDelete={handleDeleteFavorite} 
              isFavorite={true} 
              key={item.id} 
              base={item}
            />
          )}
        </div>
      </div>
    </Container>
  )
}

export default Favorite;
