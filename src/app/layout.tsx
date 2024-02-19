import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/ui/organisms/Navigation";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={
					inter.className + " flex min-h-screen w-full flex-col justify-between bg-slate-500"
				}
			>
				<Navigation />
				<main className="flex h-full w-full flex-grow flex-col pb-20 pt-10">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
