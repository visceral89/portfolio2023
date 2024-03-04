import BlogCard from "../components/BlogCard";
import { blogCard } from "../lib/interface";
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
	const data: blogCard[] = await getPosts();

	console.log(data);
	return (
		<div>
			{data.map(post, idx) =>{
				<BlogCard key={idx}/>
			}}
		</div>
	);
}
