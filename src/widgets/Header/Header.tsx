'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { LiaLockSolid } from 'react-icons/lia';
import { LoginForm } from '@/features/ui/LoginForm/LoginForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import ThemeSwitcher from '@/shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Header.module.scss';

interface HeaderProps {
	className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	const [showLoginForm, setShowLoginForm] = useState(false);
	const handleLogin = () => {
		setShowLoginForm((prev) => !prev);
	};

	return (
		<header className={classNames(cls.Header, [className])}>
			<h1 className={cls.logo}>
				<Link href="/">Bookshop</Link>
			</h1>

			<nav className={cls.nav}>
				<ul className={cls.navItems}>
					<li className={cls.navItem}>
						<Link href="/">books</Link>
					</li>
					<li className={cls.navItem}>
						<Link href="/">audiobooks</Link>
					</li>
					<li className={cls.navItem}>
						<Link href="/">Stationery & gifts</Link>
					</li>
					<li className={cls.navItem}>
						<Link href="/">blog</Link>
					</li>
				</ul>
			</nav>

			<menu className={cls.menu}>
				<Button className={cls.modalBtn} onClick={handleLogin}>
					<AiOutlineUser className={cls.menuIcon} />
				</Button>
				<LiaLockSolid className={cls.menuIcon} />
				<ThemeSwitcher />
				{showLoginForm && <LoginForm />}
			</menu>
		</header>
	);
};
