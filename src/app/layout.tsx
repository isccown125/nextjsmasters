import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/ui/organisms/Navigation";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shop",
	description: "Created by isccown125",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className + " bg-slate-500"}>
				<Navigation />
				<main>{children}</main>
			</body>
		</html>
	);
}
