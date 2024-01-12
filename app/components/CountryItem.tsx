import Image from "next/image";

type CountryItemProps = {
	country: Country;
};

const CountryItem = ({ country }: CountryItemProps) => {
	return (
		<li className="w-full h-full border border-white flex flex-col items-center justify-center">
			<span className="relative h-20 w-20">
				<Image src={country.flags.svg} alt={country.flags.alt} fill />
			</span>
			<p className="font-bold">{country.name.common}</p>
			<p className="text-gray-400">{country.capital?.[0]}</p>
		</li>
	);
};

export default CountryItem;
