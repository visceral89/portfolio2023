import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.title}>
				<h1>Rasmus Bremholm</h1>
				<h2>Frontend Developer</h2>
				<div className={styles.ctaContainer}>
					<Link href={"/contact"}>
						<div className={styles.cta}>contact</div>
					</Link>
					<Link href={"https://github.com/Visceral89"}>
						<div className={styles.cta}>github</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
