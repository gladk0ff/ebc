export interface Category {
	id: number;
	name: string;
	slug: string;
	imgSrc: string;
}

export interface Product {
	id: number;
	name: string;
	plu: string;
	barcode: string;
	categoryId: number;
	available: boolean;
	image?: string;
	tags: string[];
}

export const categories: Category[] = [
	{ id: 1, name: "Овощи", slug: "vegetables", imgSrc: "" },
	{ id: 2, name: "Фрукты", slug: "fruits", imgSrc: "" },
	{ id: 3, name: "Название в две строки", slug: "longname", imgSrc: "" },
	{ id: 4, name: "Выпечка", slug: "bakery", imgSrc: "" },
	{ id: 5, name: "Конфеты", slug: "sweets", imgSrc: "" },
	{ id: 6, name: "Длинное название в три и более строк", slug: "longlongname", imgSrc: "" },
];

export const products: Product[] = [
	{
		id: 1,
		name: "Авокадо",
		plu: "100001",
		barcode: "4779026542012",
		categoryId: 2,
		available: true,
		tags: ["Экзотические фрукты"],
	},
	{
		id: 2,
		name: "Хурма Королевская",
		plu: "100002",
		barcode: "4779026542029",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop",
		tags: ["Персики, абрикосы, сливы"],
	},
	{
		id: 3,
		name: "Гранат отборный Honey Crunch",
		plu: "100003",
		barcode: "4779026542036",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1553279012-d35b7bbe7f2b?w=200&h=200&fit=crop",
		tags: ["Экзотические фрукты"],
	},
	{
		id: 4,
		name: "Авокадо Хасс Puro Gusto",
		plu: "100004",
		barcode: "4779026542043",
		categoryId: 2,
		available: false,
		tags: ["Экзотические фрукты"],
	},
	{
		id: 5,
		name: "Манго Кейт",
		plu: "100005",
		barcode: "4779026542050",
		categoryId: 2,
		available: true,
		tags: ["Экзотические фрукты"],
	},
	{
		id: 6,
		name: "Виноград тёмный без косточек фасованный",
		plu: "245245",
		barcode: "4779026542067",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=200&h=200&fit=crop",
		tags: ["Вишня, черешня, виноград"],
	},
	{
		id: 7,
		name: "Слива красная",
		plu: "100007",
		barcode: "4779026542074",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop",
		tags: ["Персики, абрикосы, сливы"],
	},
	{
		id: 8,
		name: "Нектарин",
		plu: "100008",
		barcode: "4779026542081",
		categoryId: 2,
		available: true,
		tags: ["Персики, абрикосы, сливы"],
	},
];

export const searchProducts = (query: string): Product[] => {
	if (!query.trim()) return [];

	const lowerQuery = query.toLowerCase();
	return products.filter((product) => product.name.toLowerCase().includes(lowerQuery) || product.plu.includes(query));
};

export const getProductsByCategory = (categoryId: number): Product[] => {
	return products.filter((product) => product.categoryId === categoryId);
};

export const getProductById = (id: number): Product | undefined => {
	return products.find((product) => product.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
	return categories.find((category) => category.slug === slug);
};
