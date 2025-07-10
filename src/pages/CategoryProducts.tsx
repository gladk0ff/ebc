import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { getProductsByCategory, getCategoryBySlug, type Product } from "../data/mockData";

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

	if (isLoading) {
		return (
			<div>
				<Header title="Загрузка..." showBack={true} />
				<div className="page-content">
					<LoadingSpinner message="Загрузка товаров..." />
				</div>
			</div>
		);
	}

	return (
		<div>
			<Header title={category?.name || "Категория"} showBack={true} />
			<div className="page-content">
				{/* Filters */}
				<div className="filters">
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

				{/* Products Grid */}
				<div className="products-grid">
					{filteredProducts.map((product) => (
						<div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
							{!product.available && <div className="unavailable-badge">Нет в наличии</div>}
							<div className="product-image">
								{product.image ? <img src={product.image} alt={product.name} /> : <div>📦</div>}
							</div>
							<div className={`product-name ${!product.available ? "product-unavailable" : ""}`}>
								{product.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoryProducts;
