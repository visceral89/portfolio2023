import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h2>404...</h2>
			<p>Sorry, it seems this page dosn't exist.</p>
			<Link aria-label='return home' href='/'>
				Back to safety
			</Link>
		</div>
	);
}
