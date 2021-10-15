import React from "react";

import Logo from "../../../assets/logo.jpg";
import "./Header.css";

const Header = () => {
	return (
		<header className="headline">
			<img className="headline__logo" src={Logo} />
		</header>
	);
};

export default Header;
