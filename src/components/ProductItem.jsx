import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';

import addcartImg from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	
	const { addToCart } = useContext(AppContext);

	const handleClick = itemProduct =>{
		addToCart(itemProduct);
	}
	
	return (
		<div className="ProductItem">
			
			<img src= {product.images[0]} alt={product.description} />
			<div className="product-info">
				<div>
					<p> $ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addcartImg} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
