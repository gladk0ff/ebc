import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { searchProducts, type Product } from "../data/mockData";

const Search = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchPerformed, setSearchPerformed] = useState(false);

	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			setSearchPerformed(false);
			return;
		}

		setIsLoading(true);
		const timeoutId = setTimeout(() => {
			const searchResults = searchProducts(query);
			setResults(searchResults);
			setIsLoading(false);
			setSearchPerformed(true);
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [query]);

	const handleProductClick = (productId: number) => {
		navigate(`/products/${productId}`);
	};

	const renderResults = () => {
		if (isLoading) {
			return <LoadingSpinner message="Поиск товаров..." />;
		}

		if (!searchPerformed) {
			return null;
		}

		if (results.length === 0) {
			return (
				<div className="empty-state">
					<div className="empty-state-icon">🔍</div>
					<div className="empty-state-title">Товаров не найдено</div>
					<div className="empty-state-text">Попробуйте изменить поисковый запрос</div>
				</div>
			);
		}

		return (
			<div className="products-grid">
				{results.map((product) => (
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
		);
	};

	return (
		<div>
			<Header title="Поиск" showBack={true} />
			<div className="page-content">
				<div className="search-form">
					<input
						type="text"
						className="search-input"
						placeholder="PLU или наименование"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						autoFocus
					/>
				</div>
				{renderResults()}
			</div>
		</div>
	);
};

export default Search;
