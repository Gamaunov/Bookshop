'use client';

import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { LiaLockSolid } from 'react-icons/lia';
import { LoginForm } from '@/features/ui/LoginForm/LoginForm';
import { AppRoutes } from '@/shared/config/routes/appRoutes';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
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
				<AppLink appRoute={AppRoutes.HOME}>Bookshop</AppLink>
			</h1>

			<nav className={cls.nav}>
				<ul className={cls.navItems}>
					<li className={cls.navItem}>
						<AppLink appRoute={AppRoutes.BOOKS}>books</AppLink>
					</li>
					<li className={cls.navItem}>
						<AppLink appRoute={AppRoutes.AUDIOBOOKS}>audiobooks</AppLink>
					</li>
					<li className={cls.navItem}>
						<AppLink appRoute={AppRoutes.STATIONERY_GIFTS}>
							Stationery & gifts
						</AppLink>
					</li>
					<li className={cls.navItem}>
						<AppLink appRoute={AppRoutes.BLOG}>blog</AppLink>
					</li>
				</ul>
			</nav>

			<menu className={cls.menu}>
				<Button className={cls.modalBtn} onClick={handleLogin}>
					<AiOutlineUser className={cls.menuIcon} />
				</Button>
				<AppLink appRoute={AppRoutes.CART}>
					<LiaLockSolid className={cls.menuIcon} />
				</AppLink>
				<ThemeSwitcher />
				{showLoginForm && <LoginForm />}
			</menu>
		</header>
	);
};
