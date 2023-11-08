"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={styles.navBar}>
			<Link href='/'>
				<div className={styles.navBarLogo}>
					<h1>
						<span className={styles.thick}>Rasmus </span>Bremholm
					</h1>
				</div>
			</Link>
			<div className={styles.hamburgerMenu} onClick={toggleMenu}>
				{" "}
				{/* Removed quotes */}
				<MenuIcon />
			</div>
			<div className={`${styles.navBarLinks} ${isOpen ? styles.show : ""}`}>
				<Link href='/3d'>3D</Link>
				<Link href='/blog'>blog</Link>
				<Link href='/webdev'>frontend</Link>
			</div>
			<div className={styles.navBarLinks}>
				<Link href='/about'>about</Link>
				<Link href='/resume'>resume</Link>
				<Link href='/contact'>contact</Link>
			</div>
		</nav>
	);
};

export default Navbar;
