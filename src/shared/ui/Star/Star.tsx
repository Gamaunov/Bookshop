import StarEmpty from '@/shared/icons/StarEmpty';
import StarFill from '@/shared/icons/StarFill';
import StarHalf from '@/shared/icons/StarHalf';
import cls from './Star.module.scss';

interface StarProps {
	stars?: any;
	reviews?: number;
}
const Star = ({ stars, reviews }: StarProps) => {
	const ratingStar = Array.from({ length: 5 }, (elem, i) => {
		let number = i + 0.5;

		return (
			<span key={i}>
				{stars >= i + 1 ? (
					<StarFill />
				) : stars >= number ? (
					<StarHalf />
				) : (
					<StarEmpty />
				)}
			</span>
		);
	});

	return (
		<div className={cls.rating}>
			{ratingStar}
			<p className={cls.review}>{reviews} review</p>
		</div>
	);
};

export default Star;
