import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "@next/font/google";
import background from "assets/dotgrid.svg";

const jetbrain = JetBrains_Mono({
	subsets: ["latin"],
	display: "optional",
});

const Layout = ({ children }) => {
	return (
		<>
			<style global>
				{`
					:root {
						--jet-font: ${jetbrain.style.fontFamily};
					}
				`}
			</style>
			<Head>
				<title>Rasmus Bremholm Portfolio</title>
			</Head>
			<motion.main
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: 300, opacity: 0 }}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
				}}
			>
				<Image
					className="bg-image"
					src={background}
					alt=""
					layout="fill"
					objectPosition="center"
				/>
				{children}
			</motion.main>
		</>
	);
};

export default Layout;
