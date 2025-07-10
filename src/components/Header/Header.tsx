import { useNavigate } from "react-router";

import HomeIcon from "assets/home.svg";
import { Button } from "components/Button/Button";
import "./Header.css";

interface HeaderProps {
	title: string;
	showBack: boolean;
}

const Header = ({ title, showBack }: HeaderProps) => {
	const navigate = useNavigate();

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
				{showBack && <Button onClick={handleBack}>←</Button>}
				<h1 className="header-title">{title}</h1>
			</div>
			<span className="store-name">ГМ №1 Калуга</span>
		</header>
	);
};

export default Header;
