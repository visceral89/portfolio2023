import Image from "next/image";

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
		</div>
	);
}
