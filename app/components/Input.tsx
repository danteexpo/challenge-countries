"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const Input = () => {
	const [capital, setCapital] = useState("");
	const router = useRouter();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCapital(e.currentTarget.value);
	};

	const handleClick = () => {
		router.push(`/countries/${capital}`);
	};

	return (
		<div className="flex items-center h-10">
			<input
				className="bg-black border border-white px-2 h-full w-48"
				value={capital}
				onChange={handleChange}
			/>
			<button className="bg-white text-black px-2 h-full" onClick={handleClick}>
				Search
			</button>
		</div>
	);
};

export default Input;
