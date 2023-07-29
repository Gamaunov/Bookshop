import { text } from 'stream/consumers';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	type?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	pattern?: string;
	isValid?: boolean;
}

export const Input = ({
	className,
	type = 'text',
	isValid = true,
	onChange,
	value,
	pattern,
	...otherProps
}: InputProps) => {
	const validateInput = isValid ? '' : cls.invalidInput;

	return (
		<input
			className={classNames(cls.Input, [className, validateInput])}
			type={type}
			value={value}
			onChange={onChange}
			pattern={pattern}
		/>
	);
};
