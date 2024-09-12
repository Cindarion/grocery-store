import React, { useContext } from 'react'
import classes from './ShopProduct.module.css'
import { CartContext } from 'src/components/context/cartContext';
import ActionButton from 'src/components/UI/Buttons/ActionButton/ActionButton';

type ShopProductProps = {
  id: number,
  index: number,
  name: string,
  filename: string, 
  price: number, 
  unit_measure: string, 
  description: string
}
const ShopProduct = ({
  id, 
  index, 
  name, 
  filename, 
  price, 
  unit_measure, 
  description
}: ShopProductProps) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a TodoProvider');
  };
  const {
    getItemQuantity, 
    increaseCartQuantity, 
    decreaseCartQuantity, 
  } = cartContext;
  
  const productQuantity = getItemQuantity(id);

  const handleIncreaseQuantity = (productId: number) => {
    increaseCartQuantity(productId)
  };

  const handleDecreaseQuantity = (productId: number) => {
    decreaseCartQuantity(productId)
  }

  const renderActionButtons = () => {
    if (productQuantity === 0) {
      return (
        <div className={classes.productButtonsWrapper}>
          <ActionButton 
            onClick={() => handleIncreaseQuantity(id)}
            children={"+"}
          />
        </div>
      )
    };

    if (productQuantity > 0) {
      return ( 
        <div className={classes.productButtonsWrapper}>
          <ActionButton 
            onClick={() => handleDecreaseQuantity(id)}
            children={"-"}
          />
          <span>
            {productQuantity}
          </span>
          <ActionButton 
            onClick={() => handleIncreaseQuantity(id)}
            children={"+"}
          />
        </div>
      )
    };
  };

  return (
    <div className={classes.productWrapper} key={index}>
      <div className={classes.imageWrapper}>
        <img src={require(`src/data/images/${filename}`)} alt='product'/>
      </div>
      <div className={classes.titleWrapper}>
        <span className={classes.productName}>
          {name}
        </span>
        <span className={classes.productPrice}>
          ${price} / {unit_measure}
        </span>
        <div className={classes.productBottomContainer}>
          <div className={classes.productDescription}>
            {description}
          </div>
          {renderActionButtons()}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ShopProduct);