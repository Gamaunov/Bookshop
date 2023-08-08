'use client';

import slide_1 from '../../assets/slider/1.jpg';
import slide_2 from '../../assets/slider/2.jpg';
import slide_3 from '../../assets/slider/3.jpg';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { PiToggleLeftFill, PiToggleRightFill } from 'react-icons/pi';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Slider.module.scss';

interface Slide {
	id: number;
	imageUrl: string;
}

const slides: Slide[] = [
	{ id: 1, imageUrl: slide_1.src },
	{ id: 2, imageUrl: slide_2.src },
	{ id: 3, imageUrl: slide_3.src },
];

interface HeaderProps {
	className?: string;
}

const Slider: FC = ({ className }: HeaderProps) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [autoplay, setAutoplay] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (autoplay) {
				setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
			}
		}, 3000);

		return () => clearInterval(interval);
	}, [autoplay]);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const handleAutoplay = () => {
		setAutoplay((prev) => !prev);
	};

	return (
		<div className={classNames(cls.sliderContainer, [className])}>
			<div className={cls.autoplay}>
				Autoplay:
				<Button className={cls.autoplayBtn} onClick={handleAutoplay}>
					{autoplay ? (
						<PiToggleRightFill className={cls.autoplayIcon} />
					) : (
						<PiToggleLeftFill className={cls.autoplayIcon} />
					)}
				</Button>
			</div>
			<div className={cls.slider}>
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={classNames(cls.slide, [
							index === currentSlide ? cls.active : '',
						])}
						style={{
							transform: `translateX(-${currentSlide * 100}%)`,
						}}
					>
						<Image
							src={slide.imageUrl}
							alt={`Slide ${index + 1}`}
							className={cls.slideImage}
							width={1280}
							height={702}
							draggable={false}
							priority
						/>
					</div>
				))}
			</div>
			<div className={cls.sliderDots}>
				{slides.map((_, index) => (
					<span
						key={index}
						className={classNames(cls.dot, [
							index === currentSlide ? cls.active : '',
						])}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Slider;
