import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CartPage.module.scss';

interface CartPageProps {
	className?: string;
}

export const CartPage = ({ className }: CartPageProps) => {
	return <div className={classNames(cls.CartPage, [className])}>CartPage</div>;
};
