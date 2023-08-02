import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	disabled?: boolean;
	children?: ReactNode;
	type?: 'submit' | 'reset' | 'button';
	appButton?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	Button.displayName = 'Button';

	const {
		className,
		children,
		disabled,
		type = 'button',
		appButton,
		...otherProps
	} = props;

	return (
		<button
			type={type}
			className={classNames(cls.Button, [
				className,
				appButton ? cls.appButton : '',
			])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
