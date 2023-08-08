import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/app/page/books/model/data/books';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Books.module.scss';

export default function Page() {
	return (
		<section className={cls.books}>
			<h1 className={cls.title}>Library</h1>
			<div className={cls.booksInner}>
				{books.map((book) => (
					<div className={cls.card} key={book.id}>
						<Image placeholder="blur" draggable={false} className={cls.image} src={book.img} alt={book.title} />
						<h3 className={cls.cardTitle}> {book.title} </h3>
					</div>
				))}
			</div>
			<Link href="/">
				<Button appButton>Go Back 🧐</Button>
			</Link>
		</section>
	);
}
