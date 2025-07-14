import { Link } from "react-router";
import { categories } from "../../data/mockData";

// TODO: добавяляем для тетисрования прототипа
import "src/assets/test_Category.png";

import "./Categories.css";

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
					<img className="category-img" src={category.imgSrc || "src/assets/test_Category.png"} />
					<div className="category-name__wrapper">
						<span className="category-name">{category.name}</span>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Categories;
