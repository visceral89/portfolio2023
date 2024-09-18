import { Inter } from "next/font/google";
import "./globals.scss";
import "./layout.scss";
import { Navbar } from "./components/Navbar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Rasmus Bremholm | Portfolio",
	description: "Rasmus Bremholm | Frontend Developer from Gothenburg Sweden",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
