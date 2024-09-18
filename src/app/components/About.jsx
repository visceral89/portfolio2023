import styles from "./About.module.scss";
import { IconNextJS, IconThreeJS } from "./Icons";

export const About = () => {
	return (
		<>
			<h2>About Me</h2>
			<div className={styles.aboutContent}>
				<h3>A bit about me</h3>
				<p>
					I'm a self-taught Frontend/Fullstack developer that is currently studying Frontend
					Development at IT Högskolan in Göteborg, Sweden. I love exploring areas where tech and
					artistry meet. With my previous work in E-commerce and education I have a keen sense for
					SEO and best practises on the web to create blazing fast designs that also capture the
					human element.
				</p>
				<p>
					In my freetime I experiment with new technologies and use the 3D models I create to make
					games. Please feel free to check out my
					<a href=''>
						<span className={styles.span}> Github </span>
					</a>
					to get a sense of what im working on currently.
				</p>
				<h3>Technologies I love</h3>
				<div className={styles.techGrid}>
					<IconNextJS />
					<IconThreeJS />
					<div className={styles.gridItem}>Javascript</div>
					<div className={styles.gridItem}>Vue</div>
					<div className={styles.gridItem}>Angular</div>
					<div className={styles.gridItem}>NodeJS</div>
					<div className={styles.gridItem}>Supabase</div>
					<div className={styles.gridItem}>PostgreSQL</div>
					<div className={styles.gridItem}>SASS</div>
					<div className={styles.gridItem}>Tailwind</div>
					<div className={styles.gridItem}>Vercel</div>
					<div className={styles.gridItem}>Express</div>
					<div className={styles.gridItem}>Blender</div>
					<div className={styles.gridItem}>Python</div>
					<div className={styles.gridItem}>Git</div>
					<div className={styles.gridItem}>Figma</div>
					<div className={styles.gridItem}>React</div>
					<div className={styles.gridItem}>HTML 5</div>
				</div>
			</div>
		</>
	);
};
