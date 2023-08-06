import Link from 'next/link';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import cls from './BlogPage.module.scss';

interface BlogProps {
	className?: string;
}

export const BlogPage = ({ className }: BlogProps) => {
	return (
		<div className={classNames(cls.Blog, [className])}>
			<h1 className={cls.title}>Some Blog</h1>
			<Link href="/">
				<Button appButton>Go Back 🧐</Button>
			</Link>
		</div>
	);
};
