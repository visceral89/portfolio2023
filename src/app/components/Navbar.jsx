import styles from "./Navbar.module.scss";
import Link from "next/link";
import { Logo } from "./Icons";

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<Link href='/' aria-label='home'>
					<Logo />
				</Link>
			</div>
			<div className={styles.links}>
				<Link href='/#projects'>Projects</Link>
				<Link href='/contact'>Contact</Link>
				<Link href='/#about'>About</Link>
			</div>
		</nav>
	);
};
