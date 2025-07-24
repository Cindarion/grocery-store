import { useContext } from 'react'
import classes from './CartProduct.module.css'
import { CartContext } from '@/components/context/cartContext';
import { formatCurrency } from '@/utils/formatCurrency';
import storeProducts from '@/data/products.json'

type CartProductProps = {
  id: number;
  quantity: number;
}

const CartProduct = ({id, quantity}: CartProductProps) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a TodoProvider');
  };
  const { removeFromCart, setCustomQuantity } = cartContext;

  const product: any = storeProducts.find(i => Number(i.id) == id);
  if (!product) return null;

  const handleDelete = (productId: number) => {
    removeFromCart(productId)
  }

  const handleSelect = (inputField: React.BaseSyntheticEvent | any) => {
    inputField.select()
  }

  const handleInputChange = (inputValue: any) => {
    if (isNaN(inputValue)) return
    if (inputValue === "") return
    if (inputValue >= 100) inputValue = 99;
    const newQuantity = parseInt(inputValue, 10)
    setCustomQuantity(id, newQuantity >= 0 ? newQuantity : 0)
  }
  
  return (
    <div className={classes.productContainer}>
      <div className={classes.imageWrapper}>
        <img 
          alt='product'
          src={require(`../../../../data/images/${product.filename}`)}
        />
      </div>
      <div className={classes.productInfoWrapper}>
        <div className={classes.productDetailsWrapper}>
          <span className={classes.productName}>
            {product.title}
          </span>
          <span className={classes.productPrice}>
            ${product.price.price_per_unit} / {product.price.unit_measure}
          </span>
          <span className={classes.productQuantityWrapper}>
            <input 
              className={classes.productQuantityInput} 
              placeholder="quantity"
              value={quantity}
              onClick={(e) => handleSelect(e.target)}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <img 
              alt='edit input'
              className={classes.editQuantityIcon} 
              src={require("../../../../data/icons/edit-input-gray.png")}
            />
          </span>
        </div>
        <div className={classes.productRightInfoWrapper}>
          <span className={classes.productTotalPrice}>
            {formatCurrency(quantity * product?.price.price_per_unit || 0)}
          </span>
          <img 
            alt='delete product'
            onClick={() => handleDelete(product.id)}
            className={classes.deleteProductIcon} 
            src={require("../../../../data/icons/remove-from-cart.png")}
          />
        </div>
      </div>
    </div>
  )
}

export default CartProduct