import CountryList from "@/app/components/CountryList";

async function Capital({ params }: { params: { capital: string } }) {
	const res = await fetch(
		`https://restcountries.com/v3.1/capital/${params.capital}`
	);
	const countries: Country[] = await res.json();

	return (
		<div className="w-full max-w-7xl">
			{countries.length > 0 && <CountryList countries={countries} />}
		</div>
	);
}

export default Capital;
