import React, { useContext } from 'react';
import { useDispatch } from 'react-redux'
import './OrderItem.scss';
import close from '@icons/icon_close.png';
import { deleteProduct } from '../../store/carReducer';

const OrderItem = ({product}) => {
    const distpach = useDispatch();
    const removeFromCart = (item)=>{
        distpach(deleteProduct(item))
    }
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.strDrinkThumb} alt={product.strDrink} />
			</figure>
			<p>{product.strDrink}</p>
			<p>${product.price}</p>
			<img src={close} onClick={()=>{removeFromCart(product)}} alt="close" />
		</div>
	);
}

export  {OrderItem};