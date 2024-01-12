import CountryItem from "./CountryItem";

type CountryListProps = {
	countries: Country[];
};

const CountryList = ({ countries }: CountryListProps) => {
	return (
		<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center w-full">
			{countries.length > 0 &&
				countries.map((country: Country) => (
					<CountryItem key={country.cca2} country={country} />
				))}
		</ul>
	);
};

export default CountryList;
