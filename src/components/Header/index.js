import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux'
import { MyOrder } from '../MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import './Header.scss';

const Header = () => {
	const [toggleOrders, setToggleOrders] = useState(false);
    const cart = useSelector(state=>state.cart.list);
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
                        onClick={()=>setToggleOrders(!toggleOrders)}
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
			{/* {toggle && <Menu />} */}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;