import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.title}>
				<h1>Rasmus Bremholm</h1>
				<h2>Frontend Developer</h2>
				<div className={styles.ctaContainer}>
					<div className={styles.cta}>contact</div>
					<div className={styles.cta}>github</div>
				</div>
			</div>
		</main>
	);
}
