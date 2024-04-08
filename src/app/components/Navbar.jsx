"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const mobile = useMediaQuery("(max-width: 576px)");

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
			{mobile ? (
				<div className={styles.hamburgerMenu} onClick={toggleMenu}>
					<MenuIcon />
				</div>
			) : (
				<div className={styles.navBarPages}>
					<Link href='/webdev'>frontend</Link>
					<Link href='/blog'>blog</Link>
					<Link href='/3d'>3D</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

/*
<div className={styles.navBarPages}>
					<Link href='/webdev'>frontend</Link>
					<Link href='/blog'>blog</Link>
					<Link href='/3d'>3D</Link>
				</div>
				<div className={styles.navBarLinks}>
					<Link href='/about'>about</Link>
					<Link href='/resume'>resume</Link>
					<Link href='/contact'>contact</Link>
				</div>

*/
