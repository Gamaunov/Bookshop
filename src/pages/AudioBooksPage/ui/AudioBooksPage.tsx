import Link from 'next/link';
import { Button } from '@/shared/ui/Button/Button';
import cls from './AudioBooksPage.module.scss';

export const AudioBooksPage = () => {
	return (
		<section className={cls.AudioBooksPage}>
			<h1 className={cls.title}>Audio not available</h1>
			<Link href="/">
				<Button className="btn" appButton>
					Go Back 🧐
				</Button>
			</Link>
		</section>
	);
};
