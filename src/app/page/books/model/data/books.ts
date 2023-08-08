import { StaticImageData } from 'next/image';
import book1 from '../../../../../shared/assets/books/1.png';
import book2 from '../../../../../shared/assets/books/2.jpg';
import book3 from '../../../../../shared/assets/books/3.png';
import book4 from '../../../../../shared/assets/books/4.png';
import book5 from '../../../../../shared/assets/books/5.jpg';
import book6 from '../../../../../shared/assets/books/6.png';
import book7 from '../../../../../shared/assets/books/7.jpg';
import book8 from '../../../../../shared/assets/books/8.jpg';
import book9 from '../../../../../shared/assets/books/9.jpg';
import book10 from '../../../../../shared/assets/books/10.jpg';
import book11 from '../../../../../shared/assets/books/11.jpg';
import book12 from '../../../../../shared/assets/books/12.jpg';
import book13 from '../../../../../shared/assets/books/13.jpg';
import book14 from '../../../../../shared/assets/books/14.png';

interface IBooks {
	id: number;
	img: string | StaticImageData;
	title: string;
}

export const books: IBooks[] = [
	{
		id: 1,
		img: book1,
		title: 'Eloquent JavaScript second edition',
	},
	{
		id: 2,
		img: book2,
		title: 'Eloquent JavaScript third edition',
	},
	{
		id: 3,
		img: book3,
		title: 'Building Front-End Web Apps with Plain JavaScript',
	},
	{
		id: 4,
		img: book4,
		title: 'Clean Code in JavaScript',
	},
	{
		id: 5,
		img: book5,
		title: 'Pro React 16',
	},
	{
		id: 6,
		img: book6,
		title: 'The Complete Guide to React',
	},
	{
		id: 7,
		img: book7,
		title: 'Effective TypeScript',
	},
	{
		id: 8,
		img: book8,
		title: 'Pro JavaScript Design Patterns',
	},
	{
		id: 9,
		img: book9,
		title: 'Scope & Closures',
	},
	{
		id: 10,
		img: book10,
		title: 'Eloquent JavaScript A Modern Introduction to Programming',
	},
	{
		id: 11,
		img: book11,
		title: 'Object-Oriented JavaScript',
	},
	{
		id: 12,
		img: book12,
		title: 'Advanced JavaScript',
	},
	{
		id: 13,
		img: book13,
		title: 'Learn React Hooks',
	},
	{
		id: 14,
		img: book14,
		title: 'React The Road To Entreprise',
	},
];
