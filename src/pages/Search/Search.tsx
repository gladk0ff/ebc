import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoadingSpinner from "../../components/Spinner/Spinner";
import { searchProducts, type Product } from "../../data/mockData";

import "./Search.css";

const Search = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			setIsLoading(false);
			return;
		}

		setIsLoading(true);
		// TODO: проверить на асинхронном запроск
		const timeoutId = setTimeout(() => {
			const searchResults = searchProducts(query);
			setResults(searchResults);
			setIsLoading(false);
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [query]);

	const startSearch = (str: string) => {
		setIsLoading(true);
		setQuery(str);
	};

	const handleProductClick = (productId: number) => {
		navigate(`/products/${productId}`);
	};

	const renderResults = () => {
		if (results.length === 0) {
			return (
				<li className="search-results__item search-results--item-empty">
					<span className="item-empty-title">Товаров не найдено</span>
					<span className="item-empty-text">Попробуйте изменить поисковый запрос</span>
				</li>
			);
		}

		return results.map((product) => (
			<li className="search-results__item" onClick={() => handleProductClick(product.id)} key={product.id}>
				{product.name}
				{product.image && <img className="search-results__item-img" src={product.image} alt={product.name} />}
			</li>
		));
	};

	return (
		<div className="search">
			<input
				type="text"
				className="search-input"
				placeholder="PLU или наименование"
				value={query}
				onChange={(e) => startSearch(e.target.value)}
				autoFocus
			/>
			{isLoading && <LoadingSpinner message="Поиск товаров..." />}
			{!!query.length && !isLoading && <ul className="search-results">{renderResults()}</ul>}
		</div>
	);
};

export default Search;
