import { signIn, signOut, useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import {
	emailRegex,
	emailRegexPattern,
} from '@/shared/consts/emailRegexPattern';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [emailTouched, setEmailTouched] = useState(false);
	const [password, setPassword] = useState('');
	const [passwordTouched, setPasswordTouched] = useState(false);

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setEmail(value);
		setEmailTouched(true);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPassword(value);
		setPasswordTouched(true);
	};

	const isEmailValid = emailRegex.test(email);
	const shouldShowEmailError = emailTouched && !isEmailValid;

	const isPasswordValid = password.length >= 6;
	const shouldShowPasswordError = passwordTouched && !isPasswordValid;

	const handleSubmit = () => {
		if (email.trim() === '' || password.trim() === '') {
			console.log('Submit form cannot be empty', email, password);
			return;
		}
		console.log('Submit form:', email, password);

		session && session.user ? signOut() : signIn();
	};

	const { data: session } = useSession();
	console.log(session?.user);

	return (
		<form className={cls.loginForm}>
			<h4 className={cls.loginFormTitle}>Log in</h4>
			<div className={classNames(cls.inputInner, [cls.inputInnerEmail])}>
				<p className={cls.inputLabel}>Email</p>
				<Input
					className={cls.input}
					onChange={handleEmailChange}
					value={email}
					isValid={!shouldShowEmailError}
					pattern={emailRegexPattern}
				/>
				<p
					className={classNames(cls.inputValidationInfo, [
						!shouldShowEmailError ? cls.showInputError : '',
					])}
				>
					example.@mail.com
				</p>
			</div>
			<div className={cls.inputInner}>
				<p className={cls.inputLabel}>Password</p>
				<Input
					className={classNames(cls.input, [
						!shouldShowPasswordError ? cls.danger : '',
					])}
					type="password"
					onChange={handlePasswordChange}
					value={password}
					isValid={!shouldShowPasswordError}
				/>
				<p
					className={classNames(cls.inputValidationInfo, [
						!shouldShowPasswordError ? cls.showInputError : '',
					])}
				>
					Input must be 6 characters long
				</p>
			</div>
			{session && session.user ? (
				<Button className={cls.loginBtn} onClick={handleSubmit}>
					Sign out
				</Button>
			) : (
				<Button className={cls.loginBtn} onClick={handleSubmit}>
					Log in
				</Button>
			)}
		</form>
	);
};
