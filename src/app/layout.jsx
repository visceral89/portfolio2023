import "./globals.scss";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import styles from "@/app/styles/Layout.module.scss";

const jet = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "Rasmus Bremholm Portfolio",
	description: "Rasmus Bremholm Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={jet.className}>
				<div className={styles.gridContainer}>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
