import Input from "../components/Input";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="p-8 flex flex-col gap-8 items-center justify-center">
			<Input />
			{children}
		</div>
	);
}
