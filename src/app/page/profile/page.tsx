import Image from 'next/image';
import profileImage from '@/shared/assets/profile.png';
import { Button } from '@/shared/ui/Button/Button';
import cls from './Profile.module.scss';

export default function Page() {
	return (
		<section className={cls.Profile}>
			<div className={cls.infoInner}>
				<div>
					<h4 className={cls.title}>Profile</h4>
					<Image src={profileImage} alt="profile image" />
				</div>
				<div className={cls.info}>
					<p className={cls.labelName}>your name</p>
					<span className={cls.label}>John Smith</span>
					<p className={cls.labelName}>your email</p>
					<span className={cls.label}>example@mail.com</span>
					<Button className={cls.btn}>edit profile</Button>
				</div>
			</div>
			<div className={cls.about}>
				<h6 className={cls.aboutTitle}>about me</h6>
				<p className={cls.aboutDesc}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante
					consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus
					quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla ac
					varius.
				</p>
			</div>
		</section>
	);
}
