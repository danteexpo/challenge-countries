type Data = {
	data: Country[];
};

type Country = {
	cca2: string;
	name: {
		common: string;
	};
	capital: string[];
	flags: {
		svg: string;
		alt: string;
	};
};
