import styles from "../../styles/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.titleText}>{/* Title Text goes here */}</div>
			<div className={styles.titleImage}>{/* Image goes here */}</div>
		</section>
	);
};

export default Hero;
