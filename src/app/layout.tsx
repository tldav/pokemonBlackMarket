"use client";

import { Inter } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import client from "../api/client";
import NavRegion from "@/region/nav/NavRegion";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Team Rocket Black Market",
	description: "Team Rocket is bad.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={inter.className}>
				<ApolloProvider client={client}>
					<NavRegion />
					{children}
				</ApolloProvider>
			</body>
		</html>
	);
}

export default RootLayout;
