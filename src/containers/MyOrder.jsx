import React, { useState , useContext } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';

import flechita from '@icons/flechita.svg'

const MyOrder = ({setToggle}) => {
	const { state:{cart} } = useContext(AppContext);

	//const [backToggle, setBackToggle] = useState(toggleOrders);

	const sumTotal = () =>{
		let sum = 0;
		const reducer = (acumulador, currentValue) => acumulador + currentValue.price;
		sum = cart.reduce(reducer,0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" onClick={() => setToggle(false)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className='my-orderItem-content'>
					{cart.map(item => <OrderItem product={item} key={`orderItem-${item.id}`}/>)}
				</div>
				
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
