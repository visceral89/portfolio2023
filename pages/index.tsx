import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex flex-col m-20 font-jet uppercase gap-2">
				<h1 className="text-8xl font-extrabold">rasmus bremholm</h1>
				<h2 className="text-4xl opacity-60">frontend portfolio</h2>
				<p className="text-xl">
					This site is currently under construction, but you can still reach out
					to me here:
				</p>

				<div className="flex gap-5 m-10 text-2xl">
					<ul>
						<Link href="https://www.youtube.com/c/Visceral3D">
							<li className="hover:text-slate-300">youtube</li>
						</Link>

						<Link href="https://www.artstation.com/visceral3d">
							<li className="hover:text-slate-300">artstation</li>
						</Link>
						<Link href="https://github.com/Visceral89">
							<li className="hover:text-slate-300">github</li>
						</Link>
						<Link href="/">
							<li className="hover:text-slate-300">Contact</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
}
