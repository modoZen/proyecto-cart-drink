import React,  { useContext }  from 'react';
import { useSelector } from 'react-redux'
import { OrderItem } from '../OrderItem';
import './MyOrder.scss';

const MyOrder = () => {
    const cart = useSelector(state=>state.cart.list);

	const sumTotal = ()=>{
		const reducer = (accumulator, currentValue) => accumulator+ currentValue.price;
		const sum = cart.reduce(reducer,0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">Mi pedido</p>
			</div>
			<div className="my-order-content">
				{cart.map(product=>(
					<OrderItem product={product} key={`orderItem-${product.idDrink}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				{/* <button className="primary-button">
					Checkout
				</button> */}
			</div>
		</aside>
	);
}

export { MyOrder };