import React from "react";

import "./AppliedFilters.css";

const AppliedFilters = ({ appliedSuboptions, dispatchSuboption }) => {
	return (
		<section className="applied-filters">
			<h3 className="applied-filters__title">Applied Filters:</h3>
			{Object.keys(appliedSuboptions).find((option) => appliedSuboptions[option].length) ? (
				<ul className="applied-filters__list">
					{Object.keys(appliedSuboptions).map((option) =>
						appliedSuboptions[option].map((suboption) => (
							<li className="applied-filters__suboption" key={suboption.id}>
								<span>{suboption.title}</span>
								<span
									className="applied-filters__cross"
									onClick={() => dispatchSuboption({ type: "REMOVE_ITEM", payload: { suboption, option } })}
								>
									<span className="applied-filters__line"></span>
									<span className="applied-filters__line"></span>
								</span>
							</li>
						))
					)}
					<li className="applied-filters__suboption applied-filters__button" onClick={() => dispatchSuboption({ type: "CLEAR_STATE" })}>
						Clear All
					</li>
				</ul>
			) : (
				<p className="applied-filters__notification">- none -</p>
			)}
		</section>
	);
};

export default AppliedFilters;
