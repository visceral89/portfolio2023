import styles from "../../styles/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.titleText}>Hello{/* Title Text goes here */}</div>
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
