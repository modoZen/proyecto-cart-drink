import React,  { useContext }  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toggleOrders, toogleModal } from '../../store/uiReducer';
import { OrderItem } from '../OrderItem';
import './MyOrder.scss';

const MyOrder = () => {
	const distpach = useDispatch();
    const cart = useSelector(state=>state.cart.list);
	const navigate = useNavigate();

	const clickHandler = ()=>{
		console.log('lml');
		distpach(toggleOrders())
		navigate('/successful');
	}

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
				<button onClick={clickHandler} className="primary-button" disabled={cart.length === 0}>
					Hacer pedido
				</button>
			</div>
		</aside>
	);
}

export { MyOrder };