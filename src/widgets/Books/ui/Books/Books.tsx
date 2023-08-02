'use client';

import { uuid } from 'uuidv4';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { setIndex } from '@/widgets/Books/model/startIndexSlice';
import { Card } from '@/widgets/Books/ui/Card/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Books.module.scss';

interface NavbarProps {
	className?: string;
}

export const Books = ({ className }: NavbarProps) => {
	const dispatch: AppDispatch = useDispatch();
	const { category } = useSelector((state: RootState) => state.categorySlice);
	const index = useSelector((state: RootState) => state.startIndexSlice);
	const [active, setActive] = useState(0);
	const handleCategory = (i: number) => {
		const subject = category[i].search;
		const startIndex = 0;
		setActive(i);
		// dispatch(getBooks({ subject, startIndex }));
		// dispatch(setSearchValue(categories[i].search));
		dispatch(setIndex(0));
	};

	const handleIndex = () => {
		// const subject = searchSubject;
		// const startIndex = index + 6;
		// dispatch(getBooks({ subject, startIndex }));
		// dispatch(setIndex(index + 6));
	};

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
							key={uuid()}
						>
							{category.category}
						</li>
					))}
				</ul>
			</menu>
			<section className={cls.cards}>
				<div className={cls.cardInner}>
					<Card />
					<Card />
					<Card />
					<Card />
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
