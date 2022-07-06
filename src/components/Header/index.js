import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { MyOrder } from '../MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import './Header.scss';
import { toggleOrders } from '../../store/uiReducer';
import { useLocation } from 'react-router-dom'

const Header = () => {
	const openOrders = useSelector(state=>state.ui.openOrders);
	const distpach = useDispatch();
    const cart = useSelector(state=>state.cart.list);
	const location = useLocation();

	if(location.pathname === '/successful') return null;
	return (
		<nav>
			<div className="navbar-left">
                <p>Dulces tragos</p>
			</div>
			<div className="navbar-right">
				<p></p>
				<ul>
					<li 
                        className="navbar-shopping-cart" 
                        onClick={()=>distpach(toggleOrders())}
                    >
						<img 
                            src={shoppingCart} 
                            alt="shopping cart" 
                        />
						{cart.length > 0 && 9>=cart.length? <div>{cart.length}</div>:null}
						{cart.length > 9 && <div>+9</div>}
					</li>
				</ul>
			</div>
			{openOrders && <MyOrder />}
		</nav>
	);
}

export default Header;