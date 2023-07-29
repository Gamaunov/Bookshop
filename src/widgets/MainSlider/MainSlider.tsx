import Image from 'next/image';
import Arrow from '@/shared/assets/svg/arrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LinkBlock } from '@/shared/ui/LinkBlock/LinkBlock';
import Slider from '@/shared/ui/Slider/Slider';
import cls from './MainSlider.module.scss';

interface MainSliderProps {
	className?: string;
}

export const MainSlider = ({ className }: MainSliderProps) => {
	return (
		<section className={classNames(cls.MainSlider, [className])}>
			<LinkBlock href="/" className={cls.topLink}>
				<div className={cls.topLinkInner}>
					<span>
						Change <br /> old book <br /> on new
					</span>
					<Image src={Arrow} alt="Arrow" />
				</div>
			</LinkBlock>
			<LinkBlock href="/" className={cls.bottomLink}>
				<div className={cls.bottomLinkInner}>
					<span>
						top <br /> 100 <br /> books <br /> 2022
					</span>
					<Image src={Arrow} alt="Arrow" />
				</div>
			</LinkBlock>
			<Slider />
		</section>
	);
};
