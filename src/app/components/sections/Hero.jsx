import styles from "@/styles/Hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/constants/index.js";

import DownArrow from "@/components/DownArrow.jsx";

const Hero = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.titleText}>
				<div className={styles.accent}>Frontend Developer</div>
				<h1 className={styles.titleHeading}>Rasmus Bremholm Portfolio</h1>
				<div className={styles.titleLinks}>
					{socials.map((social) => (
						<a
							key={social.id}
							href={social.url}
							target='_blank'
							rel='noopener noreferrer'
							className={styles.socialLink}
						>
							{social.text}
						</a>
					))}
				</div>
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
				{/* <Image src='/flow.png' width={650} height={660} alt='flow graphic' />*/}
			</div>
			<DownArrow />
		</section>
	);
};

export default Hero;
