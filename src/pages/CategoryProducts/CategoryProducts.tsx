import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import cn from "classnames";

import NotFoundImageIcon from "assets/image-not-found.svg";
import LoadingSpinner from "components/Spinner/Spinner";
import { getProductsByCategory, getCategoryBySlug, type Product } from "../../data/mockData";

import "./CategoryProducts.css";

const CategoryProducts = () => {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();
	const [products, setProducts] = useState<Product[]>([]);
	const [activeFilter, setActiveFilter] = useState("all");
	const [isLoading, setIsLoading] = useState(true);

	const category = slug ? getCategoryBySlug(slug) : null;

	useEffect(() => {
		if (category) {
			setTimeout(() => {
				const categoryProducts = getProductsByCategory(category.id);
				setProducts(categoryProducts);
				setIsLoading(false);
			}, 300);
		}
	}, [category]);

	const availableTags = Array.from(new Set(products.flatMap((p) => p.tags)));

	const filteredProducts = activeFilter === "all" ? products : products.filter((p) => p.tags.includes(activeFilter));

	const handleProductClick = (productId: number) => {
		navigate(`/products/${productId}`);
	};

	const hasProducts = !!products.length;

	return (
		<div className={cn("category-products", isLoading && "category-products--loading")}>
			{isLoading ? (
				<LoadingSpinner message="Загрузка товаров..." />
			) : (
				<>
					<div className="category-products__filters">
						<button
							className={`filter-tag ${activeFilter === "all" ? "active" : ""}`}
							onClick={() => setActiveFilter("all")}
						>
							Все
						</button>
						{availableTags.map((tag) => (
							<button
								key={tag}
								className={`filter-tag ${activeFilter === tag ? "active" : ""}`}
								onClick={() => setActiveFilter(tag)}
							>
								{tag}
							</button>
						))}
					</div>

					<div className={cn("category-products__grid", !hasProducts && "category-products__grid--empty")}>
						{hasProducts ? (
							filteredProducts.map((product) => (
								<div
									key={product.id}
									className="product-card"
									onClick={() => handleProductClick(product.id)}
								>
									<div className="product-card__image">
										{product.image ? (
											<img src={product.image} alt={product.name} />
										) : (
											<NotFoundImageIcon />
										)}
										{!product.available && <span className="unavailable-badge">Нет в наличии</span>}
									</div>
									<span
										className={`product-card__name ${!product.available ? "product-unavailable" : ""}`}
									>
										{product.name}
									</span>
								</div>
							))
						) : (
							<p className="category-products__grid-empty-title">Товары не найдены</p>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default CategoryProducts;
