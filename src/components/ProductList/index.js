import React from 'react';
import { useGetDrinks } from '../../hooks/useGetDrinks';
import { ProductItem } from '../ProductItem';
import './ProductList.scss';

const ProductList = () => {
    const drinks = useGetDrinks();
	return (
		<section className="main-container">
			<div className="ProductList">
				{drinks.length>0 && drinks.map(drink =>(
					<ProductItem product={drink} key={drink.idDrink} />
				))}
			</div>
		</section>
	);
}

export { ProductList };