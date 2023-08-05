'use client';

import { uuid } from 'uuidv4';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { CartEmpty } from '@/pages/CartPage/ui/CartEmpty/CartEmpty';
import CartItem from '@/pages/CartPage/ui/CartItem/CartItem';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './CartPage.module.scss';

interface CartPageProps {
	className?: string;
}

export const CartPage = ({ className }: CartPageProps) => {
	const { totalPrice, items } = useSelector(
		(state: RootState) => state.cartSlice
	);

	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	// console.log(items, 'items');

	if (!totalCount) {
		return <CartEmpty key={uuid()} />;
	}

	console.log(items, 'myItems');

	return (
		<section className={classNames(cls.CartPage, [className])}>
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
};
