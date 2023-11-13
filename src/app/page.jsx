import styles from "@/styles/Page.module.scss";
import Hero from "@/components/sections/Hero";

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
		</main>
	);
}
