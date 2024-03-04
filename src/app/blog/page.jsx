import { client } from "../lib/sanity";

async function getPosts() {
	const query = `*[_type == "blog"] | order(_createdAt desc){
		title,
		smallDescription,
		titleImage,
		"currentSlug":slug.current
	  }`;

	const data = await client.fetch(query);
	return data;
}

export default async function Page() {
	const data = await getPosts();

	console.log(data);
	return <h1>Blog Page Works</h1>;
}
