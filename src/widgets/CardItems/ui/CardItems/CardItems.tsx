import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CardItems.module.scss';

interface CardItemsProps {
	className?: string;
}

export const CardItems = ({ className }: CardItemsProps) => {
	return <div className={classNames(cls.CardItems, [className])}></div>;
};
