import { useLocation, useMatches, useNavigate } from "react-router";

import HomeIcon from "assets/home.svg";
import { Button } from "components/Button/Button";
import "./Header.css";
import { PATH } from "pages/config";

const Header = () => {
	const navigate = useNavigate();
	const matches = useMatches();
	const location = useLocation();

	const pageTitle = location.state?.title || (matches[matches.length - 1].handle as { title: string })?.title || "";
	const isCategories = location.pathname === PATH.categories;
	const isSearch = location.pathname === PATH.search;
	const isShowBack = !isSearch && !isCategories;

	const handleBack = () => {
		navigate(-1);
	};

	const handleHome = () => {
		navigate("/");
	};

	return (
		<header className="header">
			<div className="header-left">
				<Button type="primary" onClick={handleHome}>
					<HomeIcon />
				</Button>
				{isCategories && (
					<Button
						onClick={() => {
							navigate(PATH.search);
						}}
					>
						Поиск
					</Button>
				)}
				{isSearch && (
					<Button
						onClick={() => {
							navigate(PATH.categories);
						}}
					>
						Категории
					</Button>
				)}
				{isShowBack && <Button onClick={handleBack}>← Назад</Button>}
				<h1 className="header-title">{pageTitle}</h1>
			</div>
			<span className="store-name">ГМ №1 Калуга</span>
		</header>
	);
};

export default Header;
