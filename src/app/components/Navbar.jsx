import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navBar}>
			<Link href='/'>
				<div className={styles.navBarLogo}>
					<h1>
						<span className={styles.logoBold}>Rasmus </span>Bremholm
					</h1>
				</div>
			</Link>
			<div className={styles.navBarLinks}>
				<Link href='/about'>about</Link>
				<Link href='/resume'>resume</Link>
				<Link href='/contact'>contact</Link>
			</div>
		</nav>
	);
};

export default Navbar;
