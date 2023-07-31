import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StationeryAndGiftsPage.module.scss';

interface StationeryAndGiftsPageProps {
	className?: string;
}

export const StationeryAndGiftsPage = ({
	className,
}: StationeryAndGiftsPageProps) => {
	return (
		<div className={classNames(cls.StationeryAndGiftsPage, [className])}>
			StationeryAndGiftsPage
		</div>
	);
};
