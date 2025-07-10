import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search" element={<Search />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/categories/:slug" element={<CategoryProducts />} />
					<Route path="/products/:id" element={<ProductDetail />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
