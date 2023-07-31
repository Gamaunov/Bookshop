import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AudioBooksPage.module.scss';

interface AudioBooksPageProps {
	className?: string;
}

export const AudioBooksPage = ({ className }: AudioBooksPageProps) => {
	return (
		<div className={classNames(cls.AudioBooksPage, [className])}>
			AudioBooksPage
		</div>
	);
};
