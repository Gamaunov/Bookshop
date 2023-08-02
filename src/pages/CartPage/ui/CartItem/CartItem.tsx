import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import CoverImage from '@/shared/assets/book-not-found.jpg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import Star from '@/shared/ui/Star/Star';
import cls from './CartItem.module.scss';

interface CartItemProps {
	className?: string;
}

export const CartItem = ({ className }: CartItemProps) => {
	return (
		<div className={classNames(cls.CartItem, [className])}>
			<div className={cls.cart}>
				<Image className={cls.image} src={CoverImage} alt="book" />
				<div className={cls.desc}>
					<h3 className={cls.descTitle}>The weight of things</h3>
					<p className={cls.author}>Marianne Fritz</p>
					<Star stars={4} reviews={4} />
				</div>
			</div>

			<div className={cls.bunInner}>
				<Button className={cls.btn}>
					<AiOutlineMinus className={cls.icon} />
				</Button>
				<b>12</b>
				<Button className={cls.btn}>
					<AiOutlinePlus className={cls.icon} />
				</Button>
			</div>

			<div className={cls.price}>
				<b>$33</b>
			</div>

			<p className={cls.delivery}>Shipping: delivery</p>
		</div>
	);
};
