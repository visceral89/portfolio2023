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
				<meta
					property="og:title"
					content="Rasmus Bremholm | Frontend Developer | 3D Artist | Teacher | SEO Expert"
					key="title"
				/>
				<meta charset="UTF-8"></meta>
				<meta
					name="keywords"
					content="Frontend, 3D, Teacher, Rasmus, Bremholm, Portfolio"
				></meta>
				<meta
					name="description"
					content="Rasmus Bremholm Portfolio | Frontend Developer, Teacher, 3D Artist and SEO Expert | Come in contact with me here!"
					key="desc"
				></meta>
			</Head>

			{children}
		</>
	);
};

export default Layout;
