import Image from 'next/image';
import CoverImage from '../../../../shared/assets/book-not-found.jpg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import Star from '@/shared/ui/Star/Star';
import cls from './Card.module.scss';

interface CardProps {
	className?: string;
}

export const Card = ({ className }: CardProps) => {
	return (
		<div className={classNames(cls.Card, [className])}>
			<Image
				className={cls.image}
				draggable={false}
				src={CoverImage}
				alt="book"
			/>
			<div className={cls.infoInner}>
				<p className={cls.author}>Kevin Kwan</p>
				<h4 className={cls.title}>Crazy rich asians</h4>
				<div className={cls.stars}>
					<Star stars={4} reviews={4} />
				</div>
				<p className={cls.description}>
					the outrageously funny debut novel about three super-rich, pedigreed
					Chinese families and the gossip...
				</p>
				<div className={cls.price}>Code, price</div>
				<Button appButton>buy now</Button>
			</div>
		</div>
	);
};
