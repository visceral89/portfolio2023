import Image from "next/image";
import Link from "next/link";

export default function Secret() {
	return (
		<div>
			You are not supposed to be here!
			<Link className="hazard_link" href="/">
				<Image
					className="absolute bottom-[60px] right-[55px] invisible md:visible"
					src="hazard-cube.svg"
					width={256}
					height={256}
					alt="home"
				/>
			</Link>
		</div>
	);
}
