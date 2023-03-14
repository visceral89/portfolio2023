import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout.jsx";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "@next/font/google";
import Script from "next/script";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AnimatePresence mode="wait" initial={false}>
			<main className="jetbrains.className">
				<Layout>
					<Component {...pageProps} />
					<Analytics />
				</Layout>
			</main>
		</AnimatePresence>
	);
}
