import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout.jsx";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "@next/font/google";
import Script from "next/script";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
const googleId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				id="google1"
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
			/>

			<Script id="google2" strategy="lazyOnload">
				{`
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${googleId}', {
		page_path: window.location.pathname,
		});
	`}
			</Script>
			<AnimatePresence mode="wait" initial={false}>
				<main className="jetbrains.className">
					<Layout>
						<Component {...pageProps} />
						<Analytics />
					</Layout>
				</main>
			</AnimatePresence>
		</>
	);
}
