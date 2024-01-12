import CountryList from "../components/CountryList";

export default async function Countries() {
	const res = await fetch("https://restcountries.com/v3.1/all");
	const countries: Country[] = await res.json();

	return (
		<div className="w-full max-w-7xl">
			{countries.length > 0 && <CountryList countries={countries} />}
		</div>
	);
}
