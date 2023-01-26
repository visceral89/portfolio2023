import React from "react";
import Head from "next/head";
import { JetBrains_Mono } from "@next/font/google";

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

			{children}
		</>
	);
};

export default Layout;
