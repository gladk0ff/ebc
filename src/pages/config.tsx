import { ContentLayout } from "./ContentLayout/ContentLayout";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Categories from "./Categories";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import ProductDetail from "./ProductDetail";

export const PATH = {
	base: "/",
	search: "/search",
	categories: "/categories",
	products: "/products",
};

export const ROUTES = [
	{
		path: PATH.base,
		Component: Home,
	},
	{
		Component: ContentLayout,
		children: [
			{
				path: PATH.search,
				Component: Search,
				handle: {
					title: "Поиск",
				},
			},
			{
				path: PATH.categories,
				Component: Categories,
				handle: {
					title: "Категории",
				},
			},
			{
				path: PATH.categories + "/:slug",
				Component: CategoryProducts,
			},
			{
				path: PATH.products,
				children: [
					{
						path: ":id",
						Component: ProductDetail,
					},
				],
			},
		],
	},
	{
		path: "*",
		name: "Home",
		Component: Home,
	},
];
