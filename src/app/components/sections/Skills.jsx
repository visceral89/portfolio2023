import styles from "@/styles/Skills.module.scss";
import { skills } from "@/constants/index.js";
import Image from "next/image";

export default function Skills() {
	return (
		<section className={styles.skillsSection}>
			<div className={styles.skillsText}>
				<h2>Skills</h2>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
				porro autem harum placeat dicta molestias. Cum tempora maxime soluta
				molestiae?
			</div>
			<div className={styles.skillsCardContainer}>
				{skills.map((skill) => (
					<div className={styles.skillCard} key={skill.id}>
						<Image src={skills.icon} height={32} width={32} alt={skill.id} />
						<h3>{skills.title}</h3>
						<p>{skills.text}</p>
					</div>
				))}
			</div>
		</section>
	);
}
