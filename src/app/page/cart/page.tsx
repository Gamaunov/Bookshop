'use client';

import { CartEmpty } from './CartEmpty/CartEmpty';
import CartItem from './CartItem/CartItem';
import { v4 } from 'uuid';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Cart.module.scss';

export default function Page() {
	const { totalPrice, items } = useSelector(
		(state: RootState) => state.cartSlice
	);

	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	if (!totalCount) {
		return <CartEmpty key={v4()} />;
	}

	return (
		<section className={cls.CartPage}>
			<h4 className={cls.title}>SHOPPING CART</h4>
			<ul className={cls.labels}>
				<li>ITEM</li>
				<li>QUANTITY</li>
				<li>PRICE</li>
				<li>DELIVERY</li>
			</ul>
			<div className={cls.cartItems}>
				{items.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
			<div className={cls.bottom}>
				<span className={cls.totalPrice}>
					TOTAL PRICE: {totalPrice?.toFixed(2)}
				</span>
				<Button className={cls.btn} appButton>
					CHECKOUT
				</Button>
			</div>
		</section>
	);
}
