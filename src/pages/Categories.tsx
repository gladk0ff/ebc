import { Link } from "react-router";
import { categories } from "../data/mockData";

const Categories = () => {
	return (
		<div className="categories-grid">
			{categories.map((category) => (
				<Link
					key={category.id}
					to={`/categories/${category.slug}`}
					className="category-card"
					state={{
						title: category.name,
					}}
				>
					<div className="category-icon">{category.icon}</div>
					<div className="category-name">{category.name}</div>
				</Link>
			))}
		</div>
	);
};

export default Categories;
