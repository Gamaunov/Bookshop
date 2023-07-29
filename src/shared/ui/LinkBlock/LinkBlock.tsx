import Link from 'next/link';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LinkBlock.module.scss';

interface LinkBlockProps {
	className?: string;
	children?: ReactNode;
	href: string;
}

export const LinkBlock = ({ className, children, href }: LinkBlockProps) => {
	return (
		<Link className={classNames(cls.LinkBlock, [className])} href={href}>
			{children}
		</Link>
	);
};
