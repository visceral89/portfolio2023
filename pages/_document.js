import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const googleId = process.env.GOOGLE_ANALYTICS;

export default function Document() {
	return (
		<Html lang="en">
			<Head></Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
