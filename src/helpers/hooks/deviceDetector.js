import { useEffect, useState } from "react";

export const useDeviceDetect = () => {
	const [isMobile, setMobileStatus] = useState(false);

	const debounce = (callback) => {
		let timer;
		return (event) => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(callback, 100, event);
		};
	};

	const resizeToMobile = debounce((event) => {
		window.innerWidth < 768 ? setMobileStatus(true) : setMobileStatus(false);
	});

	useEffect(() => {
		window.innerWidth < 768 ? setMobileStatus(true) : setMobileStatus(false);
		window.addEventListener("resize", resizeToMobile);
		return () => window.removeEventListener("resize", resizeToMobile);
	}, []);

	return isMobile;
};
