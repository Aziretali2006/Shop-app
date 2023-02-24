
import React from 'react';
import ClothesCard from './clothesCard/ClothesCard';
import Loader from '../loader/Loader';
import { Hooks } from '../../hooks';

import cls from "./Clothes.module.scss";

function Clothes(isFavorite) {
  const { product } = Hooks.useLayout();

  return (
    <div className={cls.clothes_inline}>

      {product?.length === 0 && <p>Empty</p>}

      {!product && <Loader />}

      {product?.map(item => 
        <ClothesCard 
          isFavorite={false} 
          key={item.id} 
          base={item}
        />
      )}

    </div>
  )
}

export default Clothes;
