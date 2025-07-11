import { Outlet } from "react-router";
import Header from "./Header/Header";

import "./ContentLayout.css";

export const ContentLayout = () => {
	return (
		<div className="page-layout">
			<Header />
			<div className="page-layout__content">
				<Outlet />
			</div>
		</div>
	);
};
