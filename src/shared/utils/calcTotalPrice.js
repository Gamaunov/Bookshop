export const calcTotalPrice = (items) => {
	return items.reduce((sum, obj) => obj.thisPrice * obj.count + sum, 0);
};
