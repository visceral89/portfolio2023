import Image from "next/image";
import { urlFor } from "../lib/sanity";

export default function BlogCard(
	title,
	smallDescription,
	currentSlug,
	titleImage
) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{smallDescription}</p>
			<Image
				src={urlFor(titleImage).url()}
				alt={title}
				width={500}
				height={500}
			/>
		</div>
	);
}
