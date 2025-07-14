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
	{
		id: 1,
		name: "Овощи",
		slug: "vegetables",
		imgSrc: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=200&fit=crop",
	},
	{
		id: 2,
		name: "Фрукты",
		slug: "fruits",
		imgSrc: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop",
	},
	{
		id: 3,
		name: "Название в две строки",
		slug: "longname",
		imgSrc: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop",
	},
	{
		id: 4,
		name: "Выпечка",
		slug: "bakery",
		imgSrc: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=200&h=200&fit=crop",
	},
	{
		id: 5,
		name: "Конфеты",
		slug: "sweets",
		imgSrc: "src/assets/test_Category.png",
	},
	{
		id: 6,
		name: "Длинное название в три и более строк",
		slug: "longlongname",
		imgSrc: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&h=200&fit=crop",
	},
];

export const products: Product[] = [
	{
		id: 1,
		name: "Авокадо",
		plu: "100001",
		barcode: "100001",
		categoryId: 2,
		available: true,
		tags: ["Экзотические фрукты"],
	},
	{
		id: 2,
		name: "Хурма Королевская",
		plu: "245245",
		barcode: "245245",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop",
		tags: ["Персики, абрикосы, сливы"],
	},
	{
		id: 3,
		name: "Гранат отборный Honey Crunch",
		plu: "100003",
		barcode: "100003",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1553279012-d35b7bbe7f2b?w=200&h=200&fit=crop",
		tags: ["Экзотические фрукты"],
	},
	{
		id: 4,
		name: "Авокадо Хасс Puro Gusto",
		plu: "100004",
		barcode: "100004",
		categoryId: 2,
		available: false,
		tags: ["Экзотические фрукты"],
	},
	{
		id: 5,
		name: "Манго Кейт",
		plu: "100005",
		barcode: "100005",
		categoryId: 2,
		available: true,
		tags: ["Экзотические фрукты"],
	},
	{
		id: 6,
		name: "Виноград тёмный без косточек фасованный",
		plu: "280005",
		barcode: "280005",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=200&h=200&fit=crop",
		tags: ["Вишня, черешня, виноград", "Вишня", "Черешня", "Виноград"],
	},
	{
		id: 7,
		name: "Слива красная",
		plu: "288552",
		barcode: "288552",
		categoryId: 2,
		available: true,
		image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop",
		tags: ["Персики, абрикосы, сливы"],
	},
	{
		id: 8,
		name: "Нектарин",
		plu: "100008",
		barcode: "100008",
		categoryId: 2,
		available: true,
		tags: ["Персики, абрикосы, сливы", "Персики", "Абрикосы", "Сливы"],
	},
	{
		id: 9,
		name: "Помидоры Черри",
		plu: "200001",
		barcode: "200001",
		categoryId: 1,
		available: true,
		image: "https://images.unsplash.com/photo-1592841200221-a6895b5c40b6?w=200&h=200&fit=crop",
		tags: ["Свежие овощи"],
	},
	{
		id: 10,
		name: "Огурцы Корнишоны",
		plu: "200002",
		barcode: "200002",
		categoryId: 1,
		available: true,
		tags: ["Свежие овощи"],
	},
	{
		id: 11,
		name: "Морковь молодая",
		plu: "200003",
		barcode: "200003",
		categoryId: 1,
		available: true,
		image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=200&h=200&fit=crop",
		tags: ["Корнеплоды"],
	},
	{
		id: 12,
		name: "Картофель молодой",
		plu: "200004",
		barcode: "200004",
		categoryId: 1,
		available: false,
		tags: ["Корнеплоды"],
	},

	// Выпечка
	{
		id: 13,
		name: "Хлеб Бородинский",
		plu: "400001",
		barcode: "400001",
		categoryId: 4,
		available: true,
		image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop",
		tags: ["Хлеб"],
	},
	{
		id: 14,
		name: "Круассан с шоколадом",
		plu: "400002",
		barcode: "400002",
		categoryId: 4,
		available: true,
		tags: ["Сдоба"],
	},
	{
		id: 15,
		name: "Багет французский",
		plu: "400003",
		barcode: "400003",
		categoryId: 4,
		available: true,
		tags: ["Хлеб"],
	},

	// Конфеты
	{
		id: 16,
		name: "Шоколадные конфеты Ассорти",
		plu: "500001",
		barcode: "500001",
		categoryId: 5,
		available: true,
		image: "https://images.unsplash.com/photo-1587135991058-8816a15a3a0b?w=200&h=200&fit=crop",
		tags: ["Шоколад"],
	},
	{
		id: 17,
		name: "Мармеладные мишки",
		plu: "500002",
		barcode: "500002",
		categoryId: 5,
		available: true,
		tags: ["Мармелад"],
	},
	{
		id: 18,
		name: "Леденцы фруктовые",
		plu: "500003",
		barcode: "500003",
		categoryId: 5,
		available: false,
		tags: ["Карамель"],
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
