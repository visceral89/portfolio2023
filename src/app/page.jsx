import styles from "./page.module.scss";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";
import { About } from "./components/About";

export default function Home() {
	return (
		<main className={styles.main}>
			<header className={styles.title}>
				<h1>Rasmus Bremholm</h1>
				<h2>
					<div className={styles.typeWriter}>
						<Typewriter
							deleteSpeed={10}
							words={["Frontend Developer", "Educator", "3D-Artist", "Frontend Developer"]}
						/>
					</div>
				</h2>
				<div className={styles.ctaContainer}>
					<Link href={"/contact"}>
						<div className={styles.cta}>contact</div>
					</Link>
					<Link href={"https://github.com/Visceral89"}>
						<div className={styles.cta}>github</div>
					</Link>
				</div>
				<div className={styles.tagline}>
					<p>Exploring areas where tech and artistry meet.</p>
				</div>
			</header>
			<section className={styles.about}>
				<About />
			</section>
		</main>
	);
}
