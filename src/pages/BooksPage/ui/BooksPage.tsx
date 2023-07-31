import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BooksPage.module.scss';

interface BooksPageProps {
	className?: string;
}

export const BooksPage = ({ className }: BooksPageProps) => {
	return (
		<div className={classNames(cls.BooksPage, [className])}>BooksPage</div>
	);
};
