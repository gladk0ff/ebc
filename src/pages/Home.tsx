import { Link } from "react-router";
import Header from "../components/Header";

const Home = () => {
	return (
		<div>
			<Header title="Главная" showBack={false} />
			<div className="page-content">
				<div className="home-buttons">
					<Link to="/search" className="home-button">
						<div className="home-button-icon">🔍</div>
						<span>Поиск</span>
					</Link>
					<Link to="/categories" className="home-button">
						<div className="home-button-icon">📚</div>
						<span>Категории</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
