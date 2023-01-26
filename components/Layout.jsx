import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
	return (
		<>
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
				{children}
			</motion.main>
		</>
	);
};

export default Layout;
