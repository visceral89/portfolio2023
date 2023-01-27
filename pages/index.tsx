import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function Home() {
	return (
		<>
			<div className="flex flex-col m-20 font-jet uppercase gap-2 content-start justify-start shrink">
				<h1 className="md:text-8xl text-6xl font-extrabold">rasmus bremholm</h1>
				<h2 className="text-4xl opacity-60">frontend portfolio</h2>
				<p className="text-xl">
					This site is currently under construction, but you can still reach out
					to me here:
				</p>

				<div>
					<nav className="flex flex-col flex-initial gap-2 m-10 text-2xl shrink">
						<Link
							className="list group"
							href="https://www.youtube.com/c/Visceral3D"
						>
							<MdArrowForwardIos className="list-icon" />
							youtube
						</Link>
						<Link
							className="list group"
							href="https://www.artstation.com/visceral3d"
						>
							<MdArrowForwardIos className="list-icon" />
							artstation
						</Link>
						<Link className="list group" href="https://github.com/Visceral89">
							<MdArrowForwardIos className="list-icon" />
							github
						</Link>
						<Link className="list group" href="/">
							<MdArrowForwardIos className="list-icon" />
							Contact
						</Link>
					</nav>
				</div>
			</div>
			<Image
				className="absolute bottom-0 right-0"
				src="hazard-cube.svg"
				width={256}
				height={256}
				alt=""
			/>
		</>
	);
}
