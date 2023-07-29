import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import Providers from '@/app/providers/providers';
import { Header } from '@/widgets/Header/Header';
import './styles/global.scss';

const font = Montserrat({
	weight: ['400', '500', '700', '900'],
	subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
	title: 'Bookshop',
	description: 'Bookshop, google books api',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<div id="modal-root"></div>
				<Providers>
					<Header />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
