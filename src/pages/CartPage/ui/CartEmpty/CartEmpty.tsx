import Link from 'next/link';
import { AppRoutes } from '@/shared/config/routes/appRoutes';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './CartEmpty.module.scss';

interface CartEmptyProps {
	className?: string;
}

export const CartEmpty = ({ className }: CartEmptyProps) => {
	return (
		<section className={classNames(cls.CartEmpty, [className])}>
			<h1 className={cls.title}>
				Empty <span>😕</span>
			</h1>
			<Link href={AppRoutes.HOME}>
				<Button appButton>go back 😺</Button>
			</Link>
		</section>
	);
};
