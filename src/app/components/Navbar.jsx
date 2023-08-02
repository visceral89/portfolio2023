import Link from "next/link";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<Link href="">
					<li>about</li>
				</Link>
				<Link href="">
					<li>resume</li>
				</Link>
				<Link href="">
					<li>contact</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
