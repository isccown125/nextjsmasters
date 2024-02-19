import React from "react";
import { Container } from "@/ui/atoms/utils/Container";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <Container className="pb-28 pt-20">{children}</Container>;
};

export default Layout;
