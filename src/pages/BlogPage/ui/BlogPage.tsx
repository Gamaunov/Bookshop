import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BlogPage.module.scss';

interface BlogProps {
	className?: string;
}

export const BlogPage = ({ className }: BlogProps) => {
	return <div className={classNames(cls.Blog, [className])}>BlogPage</div>;
};
