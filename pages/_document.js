import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const googleId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
				></script>
				<script>
					window.dataLayer = window.dataLayer || []; function gtag()
					{dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config', `$
					{googleId}`)
				</script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
