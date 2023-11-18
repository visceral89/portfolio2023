import styles from "@/styles/Skills.module.scss";
import { skills } from "@/constants/index.js";
import Image from "next/image";
import DownArrow from "@/components/DownArrow.jsx";

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
						<Image src={skill.icon} height={32} width={32} alt={skill.id} />
						<h3>{skill.title}</h3>
						<p>{skill.text}</p>
					</div>
				))}
			</div>

			<DownArrow />
		</section>
	);
}
