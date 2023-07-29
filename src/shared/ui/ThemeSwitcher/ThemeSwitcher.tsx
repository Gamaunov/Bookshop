'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { Button } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Button
			className={cls.switchBtn}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? (
				<CiLight className={cls.icon} />
			) : (
				<CiDark className={cls.icon} />
			)}
		</Button>
	);
};

export default ThemeSwitcher;
