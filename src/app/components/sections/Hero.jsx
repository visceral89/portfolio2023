import styles from "../../styles/Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.titleText}>
				<div className={styles.accent}>Frontend Developer</div>
				<h1 className={styles.titleHeading}>Rasmus Bremholm Portfolio</h1>
				<p>
					Hi, welcome to my portfolio website! Im a frontend developer from
					Göteborg, Sweden. Some people call me The Jack of All trades, and
					master of some. I love to create, and here you will get a taste of
					what I love to make!
				</p>
				<Link href='/contact'>
					<div className={styles.contactButton}>Contact Me</div>
				</Link>
			</div>
			<div className={styles.titleImage}>
				{/* <Image
					src='/guy_half.png'
					width={800}
					height={800}
					alt='rasmus bremholm'
				/>*/}
			</div>
		</section>
	);
};

export default Hero;
