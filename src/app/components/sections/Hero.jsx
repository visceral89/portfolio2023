import styles from "../../styles/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.titleText}>
				<div className={styles.accent}>Frontend Developer</div>
				<h1>Rasmus Bremholm Portfolio</h1>
			</div>
			<div className={styles.titleImage}>
				<Image
					src='/guy_half.png'
					width={800}
					height={800}
					alt='rasmus bremholm'
				/>
			</div>
		</section>
	);
};

export default Hero;
