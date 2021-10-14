import React from "react";
import Header from "./components/Header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			{children}
		</div>
	);
};

export default Layout;
