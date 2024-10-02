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
				<Link aria-label='projects' href='/#projects'>
					Projects
				</Link>
				<Link aria-label='contact me' href='/contact'>
					Contact
				</Link>
				<Link aria-label='about rasmus' href='/#about'>
					About
				</Link>
			</div>
		</nav>
	);
};
