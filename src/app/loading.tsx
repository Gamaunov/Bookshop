import Image from 'next/image';
import Legen from '../shared/assets/loader/dary.gif';

export default function Loading() {
	return (
		<Image className="Legendary" src={Legen} alt="It`s gonna be Legendary" />
	);
}
