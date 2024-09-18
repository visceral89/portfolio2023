import styles from "./Projects.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
	return (
		<>
			<h2>Recent Projects</h2>
			<div className={styles.wrapper}>
				<article className={styles.projectCard}>
					<Image src='/placeholder_650w.png' width={650} height={650} alt='project image 1' />
					<div className={styles.projectCardContent}>
						<h4>Horus Public API</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ipsum vitae? Aut
							temporibus accusantium vel!
						</p>
						<a href='https://github.com/Visceral89/horusheresy-front'>Read more</a>
					</div>
				</article>
				<article className={styles.projectCard}>
					<Image src='/placeholder_650w.png' width={650} height={650} alt='project image 1' />
					<div className={styles.projectCardContent}>
						<h4>Pokedex App</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ipsum vitae? Aut
							temporibus accusantium vel!
						</p>
						<a href='https://github.com/Visceral89/Pokedex-Api'>Read more</a>
					</div>
				</article>
				<article className={styles.projectCard}>
					<Image src='/placeholder_650w.png' width={650} height={650} alt='project image 1' />
					<div className={styles.projectCardContent}>
						<h4>Portfolio</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ipsum vitae? Aut
							temporibus accusantium vel!
						</p>
						<a href='https://github.com/Visceral89/portfolio2023'>Read more</a>
					</div>
				</article>
			</div>
		</>
	);
};
