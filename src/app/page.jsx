import styles from "./page.module.css";
import Hero from "./components/sections/Hero";

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
		</main>
	);
}
