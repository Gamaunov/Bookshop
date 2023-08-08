'use client';

import { Card } from '../Card/Card';
import { v4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { getBooks } from '@/widgets/Books/model/bookSlice';
import { setSearchValue } from '@/widgets/Books/model/searchValueSlice';
import { setIndex } from '@/widgets/Books/model/startIndexSlice';
import CardSkeleton from '@/widgets/Books/ui/CardSkeleton/CardSkeleton';
import { Status } from '@/shared/enums/status';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Books.module.scss';

interface NavbarProps {
	className?: string;
}

export const Books = ({ className }: NavbarProps) => {
	const dispatch: AppDispatch = useDispatch();

	const [active, setActive] = useState(0);

	const { category } = useSelector((state: RootState) => state.categorySlice);
	const searchSubject = useSelector(
		(state: RootState) => state.searchValueSlice.searchValue
	);
	const index = useSelector((state: RootState) => state.startIndexSlice.index);
	// @ts-ignore
	const books = useSelector((state: RootState) => state.bookSlice.books.items);
	const { status } = useSelector((state: RootState) => state.bookSlice);

	const handleCategory = (i: number) => {
		const subject = category[i].search;
		const startIndex = 0;
		setActive(i);
		dispatch(getBooks({ subject, startIndex }));
		dispatch(setSearchValue(category[i].search));
		dispatch(setIndex(0));
	};

	const handleIndex = () => {
		const subject = searchSubject;
		const startIndex = index + 6;
		dispatch(getBooks({ subject, startIndex }));
		dispatch(setIndex(index + 6));
	};

	useEffect(() => {
		handleCategory(0);
	}, []); // eslint-disable-line

	const skeletons = [...new Array(6)].map((_) => <CardSkeleton key={v4()} />);

	return (
		<main className={classNames(cls.Books, [className])}>
			<menu className={cls.menu}>
				<ul className={cls.menuList}>
					{category.map((category, i) => (
						<li
							onClick={() => handleCategory(i)}
							className={classNames('', [
								active === i ? cls.active : cls.category,
							])}
							key={v4()}
						>
							{category.category}
						</li>
					))}
				</ul>
			</menu>
			<section className={cls.cards}>
				<div className={cls.cardInner}>
					{status === Status.LOADING
						? skeletons
						: books?.map((book: any) => <Card key={v4()} book={book} />)}
				</div>
				<div className={cls.loadMore}>
					<span onClick={() => handleIndex()}>
						<Button appButton onClick={() => handleIndex()}>
							load more
						</Button>
					</span>
				</div>
			</section>
		</main>
	);
};
