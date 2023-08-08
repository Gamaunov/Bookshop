'use client';

import store, { persistor } from '../store/store';
// import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface ProvidersProps {
	children?: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			// <SessionProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{children}
				</PersistGate>
			</Provider>
			// </SessionProvider>
		);
	}
	return (
		<ThemeProvider>
			{/*<SessionProvider>*/}
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{children}
				</PersistGate>
			</Provider>
			{/*</SessionProvider>*/}
		</ThemeProvider>
	);
}
