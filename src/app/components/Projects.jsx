import styles from "./Projects.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
	return (
		<div className={styles.wrapper}>
			<article className={styles.projectCard}>
				<Image src='/placeholder_650w.png' width={650} height={650} alt='project image 1' />
				<div className={styles.projectCardContent}>
					<h4>Project 1</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ipsum vitae? Aut
						temporibus accusantium vel!
					</p>
				</div>
			</article>
			<article className={styles.projectCard}>
				<Image src='/placeholder_650w.png' width={650} height={650} alt='project image 1' />
				<div className={styles.projectCardContent}>
					<h4>Project 2</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ipsum vitae? Aut
						temporibus accusantium vel!
					</p>
				</div>
			</article>
			<article className={styles.projectCard}>
				<Image src='/placeholder_650w.png' width={650} height={650} alt='project image 1' />
				<div className={styles.projectCardContent}>
					<h4>Project 3</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ipsum vitae? Aut
						temporibus accusantium vel!
					</p>
				</div>
			</article>
		</div>
	);
};
