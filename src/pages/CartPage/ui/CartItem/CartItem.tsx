import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store/store';
import {
	CartItemType,
	addItem,
	minusItem,
	removeItem,
} from '@/pages/CartPage/model/cartSlice';
import { Button } from '@/shared/ui/Button/Button';
import cls from './CartItem.module.scss';

const CartItem = ({
	id,
	title,
	thisPrice,
	count,
	img,
	currencyCodeType,
	author,
}: CartItemType) => {
	const dispatch: AppDispatch = useDispatch();

	const onClickPlus = () => {
		// @ts-ignore, we need this guy for some reason
		dispatch(addItem({ id }));
	};

	const onClickMinus = () => {
		dispatch(minusItem(id));
	};

	const onClickRemove = () => {
		dispatch(removeItem(id));
	};

	const itemCount = (thisPrice * count).toFixed(2);
	return (
		<div className={cls.CartItem}>
			<div className={cls.card}>
				<Button className={cls.remove} onClick={onClickRemove}>
					<CiCircleRemove className={cls.icon} disabled={count === 1} />
				</Button>
				<Image
					className={cls.image}
					draggable={false}
					width={210}
					height={325}
					src={img}
					alt="book"
				/>
				<div className={cls.info}>
					<h3>{title}</h3>
					<p className={cls.author}>{author}</p>
				</div>
			</div>

			<div className={cls.quantityBtn}>
				<Button
					className={cls.btn}
					disabled={count === 1}
					onClick={onClickMinus}
				>
					<AiOutlineMinus className={cls.icon} disabled={count === 1} />
				</Button>
				<b className={cls.count}>{count}</b>
				<Button
					className={cls.btn}
					disabled={thisPrice === 0}
					onClick={onClickPlus}
				>
					<AiOutlinePlus className={cls.icon} disabled={thisPrice === 0} />
				</Button>
			</div>
			<div className={cls.price}>
				{thisPrice * count === 0 ? (
					<p title="you allowed to take only one gift">Free</p>
				) : (
					<b>
						{itemCount} {currencyCodeType}
					</b>
				)}
			</div>

			<p className={cls.delivery}>Shipping: delivery</p>
		</div>
	);
};

export default CartItem;
