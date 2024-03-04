async function getPosts() {
	const query = `*[_type == "blog"] | order(_createdAt desc){
		title,
		smallDescription,
		titleImage,
		"currentSlug":slug.current
	  }`;
}

export default function Page() {
	return <h1>Blog Page Works</h1>;
}
