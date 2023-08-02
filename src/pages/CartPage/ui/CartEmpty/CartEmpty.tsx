import Link from 'next/link';
import { AppRoutes } from '@/shared/config/routes/appRoutes';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CartEmpty.module.scss';

interface CartEmptyProps {
	className?: string;
}

export const CartEmpty = ({ className }: CartEmptyProps) => {
	return (
		<section className={classNames(cls.CartEmpty, [className])}>
			<h1>
				Empty <span>😕</span>
			</h1>
			<Link href={AppRoutes.HOME}>
				<button className="btn">go back 😺</button>
			</Link>
		</section>
	);
};
