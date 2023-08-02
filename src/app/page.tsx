import { Books } from '@/widgets/Books';
import { MainSlider } from '@/widgets/MainSlider/MainSlider';

export default async function Home() {
	return (
		<main className="main">
			<MainSlider />
			<Books />
		</main>
	);
}
