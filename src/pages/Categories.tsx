import { Link } from "react-router";
import Header from "../components/Header/Header";
import { categories } from "../data/mockData";

const Categories = () => {
	return (
		<div>
			<Header title="Категории" showBack={true} />
			<div className="page-content">
				<div className="categories-grid">
					{categories.map((category) => (
						<Link key={category.id} to={`/categories/${category.slug}`} className="category-card">
							<div className="category-icon">{category.icon}</div>
							<div className="category-name">{category.name}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
