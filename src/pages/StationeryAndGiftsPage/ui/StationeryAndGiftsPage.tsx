import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/pages/BooksPage/model/data/books';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './StationeryAndGiftsPage.module.scss';

interface StationeryAndGiftsPageProps {
	className?: string;
}

export const StationeryAndGiftsPage = ({
	className,
}: StationeryAndGiftsPageProps) => {
	return (
		<section className={cls.StationeryAndGiftsPage}>
			<p className={cls.text}>
				Good news in honor of the opening of our store some books you can get as
				<b> a gift</b>
			</p>
			<Link href="/">
				<Button appButton>Go Back 🧐</Button>
			</Link>
		</section>
	);
};
