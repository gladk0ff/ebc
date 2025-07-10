import { Link } from "react-router";

import SearchIcon from "assets/search.svg";
import CategoryIcon from "assets/category.svg";
import "./Home.css";

const Home = () => {
	return (
		<div className="home-wrapper">
			<span className="home-store-name">ГМ №1 Калуга</span>
			<Link to="/search" className="home-button">
				<SearchIcon />
				<span className="home-button__text">Поиск</span>
			</Link>
			<Link to="/categories" className="home-button">
				<CategoryIcon />
				<span>Категории</span>
			</Link>
		</div>
	);
};

export default Home;
