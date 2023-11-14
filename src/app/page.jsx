import styles from "@/styles/Page.module.scss";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
	return (
		<main className={styles.main}>
			<Hero />
			<Skills />
		</main>
	);
}
