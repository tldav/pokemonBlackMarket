const toUSD = (num: number | undefined): string => {
	return num
		? num.toLocaleString("en-US", {
				style: "currency",
				currency: "USD",
		  })
		: "";
};

export default toUSD;
