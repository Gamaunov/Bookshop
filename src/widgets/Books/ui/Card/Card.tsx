import Image from 'next/image';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	CartItemType,
	addItem,
	removeItem,
} from '@/app/page/cart/model/cartSlice';
import { AppDispatch, RootState } from '@/app/store/store';
import { Book } from '@/widgets/Books/model/types/insex';
import CoverImage from '../../../../shared/assets/book-not-found.jpg';
import { Button } from '@/shared/ui/Button/Button';
import Star from '@/shared/ui/Star/Star';
import { isThisNumber } from '@/shared/utils/isThisNumber';
import cls from './Card.module.scss';

export const Card: FC<{ book: Book }> = ({ book }) => {
	const dispatch: AppDispatch = useDispatch();
	const items = useSelector((state: RootState) => state.cartSlice.items);

	const img = book.volumeInfo?.imageLinks?.thumbnail || CoverImage;
	const author = book.volumeInfo?.authors
		? book.volumeInfo?.authors.join(', ')
		: '';
	const title = book?.volumeInfo?.title;
	const description =
		book.volumeInfo?.description?.slice(0, 94).concat('...') || '';
	const price = book.saleInfo?.retailPrice?.amount;
	const currencyCode = book.saleInfo?.retailPrice?.currencyCode;
	const stars = book.volumeInfo?.averageRating || 0;
	const reviews = book.volumeInfo?.ratingsCount || 0;
	const id = book.id;
	const thisPrice = isThisNumber(price) ? price : 0;
	const currencyCodeType =
		currencyCode !== undefined && currencyCode === 'RUB'
			? '₽'
			: currencyCode === 'USD'
			? '$'
			: currencyCode || '';

	const onClickRemove = () => {
		dispatch(removeItem(id));
	};

	const onClickAdd = () => {
		const item: CartItemType = {
			id,
			title,
			thisPrice: thisPrice || 0,
			img,
			currencyCodeType,
			count: 1,
			author,
		};
		dispatch(addItem(item));
	};

	return (
		<div className={cls.Card}>
			<Image
				className={cls.image}
				draggable={false}
				width={210}
				height={325}
				src={img ? img : CoverImage}
				alt="book"
			/>
			<div className={cls.infoInner}>
				<p className={cls.author}>{author}</p>
				<h4 className={cls.title}>{title}</h4>
				<div className={cls.stars}>
					{stars > 0.4 && reviews > 0 && (
						<Star stars={stars} reviews={reviews} />
					)}
				</div>
				<p className={cls.description}>{description}</p>
				<div className={cls.price}>
					{' '}
					{currencyCodeType}
					{price}
				</div>
				{!items.some((product) => product.id === id) ? (
					<Button appButton onClick={onClickAdd}>
						buy now
					</Button>
				) : (
					<Button appButton onClick={onClickRemove}>
						in the cart
					</Button>
				)}
			</div>
		</div>
	);
};
