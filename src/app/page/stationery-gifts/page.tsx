import Link from 'next/link';
import { Button } from '@/shared/ui/Button/Button';
import cls from './StationeryAndGifts.module.scss';

export default function Page() {
	return (
		<section className={cls.StationeryAndGiftsPage}>
			<p className={cls.text}>
				Good news in honor of the opening of our store some books you can get as
				<b> a gift</b>
			</p>
			<Link href="/">
				<Button appButton>Go Back 🧐</Button>
			</Link>
		</section>
	);
}
