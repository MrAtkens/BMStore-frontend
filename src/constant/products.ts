import { IProduct } from 'domain/interfaces/IProduct';

export const products = [
	{
		id: "1",
		price: 2000,
		info:{
			title: "Первый продукт",
			description: "Первое описание"
		},
		category: "Телефоны",
		images: [
			{
				url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL4qe6bd9dsRJIVcdzbWFT29VaCMbFq935w&usqp=CAU",
				isMain: true
			}
		],
		filters: [
			{
				key: "Цвет",
				value: "Чёрный"
			}
		]
	}
] as Array<IProduct>
