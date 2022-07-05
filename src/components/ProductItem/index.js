import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../store/carReducer';
import { toogleModal } from '../../store/uiReducer';
import btAddToCart from '@icons/bt_add_to_cart.svg';
import './ProductItem.scss';

const ProductItem = ({ product }) => {
	const cart = useSelector(state=>state.cart.list)
	const distpach = useDispatch()
	const handlerClick = item=>{
		if(cart.some(elem=>elem.idDrink === item.idDrink)) distpach(toogleModal())
		else distpach(addProduct(item));
	}
	return (
		<div className="ProductItem">
			<img src={product.strDrinkThumb} alt={product.strDrink} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.strDrink}</p>
				</div>
				<figure 
                    onClick={()=>handlerClick(product)}
                >
					<img src={btAddToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export { ProductItem };