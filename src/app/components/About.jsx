import styles from "./About.module.scss";
import {
	IconNextJS,
	IconThreeJS,
	IconJS,
	IconVue,
	IconAngular,
	IconNode,
	IconSupa,
	IconPostgre,
	IconSass,
	IconTailwind,
	IconPython,
	IconGit,
	IconFigma,
	IconReact,
	IconHTML,
	IconCSS,
} from "./Icons";

export const About = () => {
	return (
		<>
			<h2 id='about'>About Me</h2>
			<div className={styles.aboutContent}>
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
					<IconJS />
					<IconVue />
					<IconAngular />
					<IconNode />
					<IconSupa />
					<IconPostgre />
					<IconSass />
					<IconTailwind />
					<IconPython />
					<IconGit />
					<IconFigma />
					<IconReact />
					<IconHTML />
				</div>
			</div>
		</>
	);
};
