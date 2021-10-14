import React from "react";
import "./Header.css";
import Logo from "../../../assets/logo.jpg";

const Header = () => {
	return (
		<header className="headline">
			<img className="headline__logo" src={Logo} />
		</header>
	);
};

export default Header;
