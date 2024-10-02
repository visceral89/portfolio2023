import { Inter } from "next/font/google";
import "./globals.scss";
import "./layout.scss";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Rasmus Bremholm | Portfolio",
	description: "Rasmus Bremholm | Frontend Developer from Gothenburg Sweden",
	openGraph: {
		title: "Rasmus Bremholm | Portfolio",
		description:
			"Rasmus Bremholm Portfolio, a frontend developer from Gothenburg Sweden looking for new oppurtunities",
		url: "https://www.rasmusbremholm.com",
		siteName: "Rasmus Bremholm Portfolio",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
