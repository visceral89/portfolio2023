import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout.jsx";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AnimatePresence mode="wait" initial={false}>
			<Layout>
				<Component {...pageProps} />
				<Analytics />
			</Layout>
		</AnimatePresence>
	);
}
