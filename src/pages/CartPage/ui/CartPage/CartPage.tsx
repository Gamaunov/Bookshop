import { CartItem } from '@/pages/CartPage/ui/CartItem/CartItem';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './CartPage.module.scss';

interface CartPageProps {
	className?: string;
}

export const CartPage = ({ className }: CartPageProps) => {
	return (
		<section className={classNames(cls.CartPage, [className])}>
			<h4 className={cls.title}>SHOPPING CART</h4>
			<div className={cls.labels}>
				<p>ITEM</p>
				<p>QUANTITY</p>
				<p>PRICE</p>
				<p>DELIVERY</p>
			</div>
			<div className={cls.cartItems}>
				<CartItem />
			</div>
			<div className={cls.bottom}>
				<span className={cls.totalPrice}>TOTAL PRICE: $30.58</span>
				<Button className={cls.btn} appButton>
					CHECKOUT
				</Button>
			</div>
		</section>
	);
};
