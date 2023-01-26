import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "@next/font/google";


const jetbrain = JetBrains_Mono({
	subsets: ["latin"],
	display: "optional",
});

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Rasmus Bremholm Portfolio</title>
			</Head>

			{children}
		</>
	);
};

export default Layout;
