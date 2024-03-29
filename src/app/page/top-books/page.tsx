'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { Button } from '@/shared/ui/Button/Button';
import cls from './TopBooks.module.scss';

export default function Page() {
	const topBooks = useSelector(
		(state: RootState) => state.topBookSlice.topBook
	);

	return (
		<section className={cls.TopBooks}>
			<h1 className={cls.title}>Top 100 Books</h1>
			<ul className={cls.booksInner}>
				{topBooks?.map((book, i) => (
					<li className={cls.book} key={book}>
						<span className={cls.book}>{i + 1}</span> {book}
					</li>
				))}
			</ul>
			<Link href="/">
				<Button appButton>Home</Button>
			</Link>
		</section>
	);
}
