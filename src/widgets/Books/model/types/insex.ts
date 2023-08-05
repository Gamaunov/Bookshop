export interface Book {
	id: number;
	volumeInfo?: {
		imageLinks?: {
			thumbnail?: string;
		};
		authors?: string[];
		title?: any;
		description?: string;
		averageRating?: number;
		ratingsCount?: number;
	};
	saleInfo?: {
		retailPrice?: {
			amount?: number;
			currencyCode?: string;
		};
	};
}
