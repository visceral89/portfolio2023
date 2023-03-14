import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "@next/font/google";
import Script from "next/script";

const jetbrain = JetBrains_Mono({
	subsets: ["latin"],
	display: "optional",
});

const googleId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

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
				<meta charSet="UTF-8"></meta>
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
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
			/>

			<Script id="google-analytics" strategy="afterInteractive">
				{`
		window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', '${googleId}', {
	    page_path: window.location.pathname,
	  });
	`}
			</Script>
			<main>
				{children} <div className="dotgrid"></div>
			</main>
		</>
	);
};

export default Layout;
