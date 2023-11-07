import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.navBar}>
			<div className={styles.navBarLogo}></div>
			<div className={styles.navBarLinks}>
				<Link href=''>about</Link>
				<Link href=''>resume</Link>
				<Link href=''>contact</Link>
			</div>
		</nav>
	);
};

export default Navbar;
