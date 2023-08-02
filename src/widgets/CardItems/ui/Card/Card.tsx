import Image from 'next/image';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import Star from '@/shared/ui/Star/Star';
import CoverImage from '@shared/assets/book-not-found.jpg';
import cls from './Card.module.scss';

interface CardProps {
	className?: string;
}

export const Card = ({ className }: CardProps) => {
	return (
		<div className={classNames(cls.Card, [className])}>
			<Image src={CoverImage} alt="book" />
			<div>
				<div>author</div>
				<div>title</div>
				<div>
					<Star stars={4} reviews={4} />
				</div>
				<p>description</p>
				<div>Code, price</div>
				<Button>buy now</Button>
			</div>
		</div>
	);
};
