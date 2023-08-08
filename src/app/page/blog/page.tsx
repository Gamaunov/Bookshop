import Link from 'next/link';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Blog.module.scss';

export default function Page() {
	return (
		<section className={cls.Blog}>
			<h1 className={cls.title}>Some Blog</h1>
			<Link href="/">
				<Button appButton>Go Back 🧐</Button>
			</Link>
		</section>
	);
}
