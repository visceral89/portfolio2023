import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>Rasmus Bremholm Portfolio</title>
				<meta
					name="description"
					content="Rasmus Bremholm Frontend Developer Teacher 3D Artist"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<h1 className="text-8xl">rasmus bremholm</h1>
				<h2>frontend portfolio</h2>
				<p>
					This site is currently under construction, but you can still reach out
					to me here:
				</p>
			</div>
		</>
	);
}
