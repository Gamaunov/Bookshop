import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import Providers from '@/app/providers/providers';
import { Header } from '@/widgets/Header/Header';
import './styles/global.scss';

const font = Montserrat({
	weight: ['400', '500', '700', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Bookshop',
	description: 'Bookshop, google books api',
	icons: {
		icon: ['/favicon.ico?v=1'],
		apple: ['/apple-touch-icon.png?v=4'],
		shortcut: ['/apple-touch-icon.png'],
	},
	manifest: '/site.web-manifest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
