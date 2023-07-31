import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	return (
		<section className={classNames(cls.NotFoundPage, [className])}>
			<h2 className={cls.status}>404</h2>
			<p>Could not find requested resource</p>
		</section>
	);
};
